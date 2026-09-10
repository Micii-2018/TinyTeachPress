import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { emailService } from '@/lib/emailService';

const products = [
  {
    id: 1,
    title: "Storytelling Lab",
    description: "Props and prompts for digital storytelling.",
    image: "https://images.unsplash.com/photo-1527404208018-43772887af59"
  },
  {
    id: 2,
    title: "Digital Art Studio",
    description: "Create masterpieces with pixels and paint.",
    image: "https://images.unsplash.com/photo-1678576495671-f09f49bbbfd2"
  }
];

const ShopTheSpot = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [parentEmail, setParentEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleRequest = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailService.sendFormEmail({
        email: parentEmail,
        product: selectedProduct?.title,
        submissionType: 'kid_wishlist_request'
      });
      
      toast({
        title: "Request Sent! 🌟",
        description: "We sent an email to your grown-up!",
      });
      
      setParentEmail('');
      setOpen(false);
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Try again!",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#1A3C6E] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDF8F3]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F2A4D] px-4 py-2 rounded-full font-bold mb-6 shadow-lg">
            <ShoppingBag size={20} />
            <span>Broski's Picks</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FDF8F3] mb-4">
            Shop the Spot
          </h2>
          <p className="text-xl text-[#FDF8F3]/80 max-w-2xl mx-auto">
            Cool tools and books to help you build your next big idea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              className="bg-[#FDF8F3] rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0F2A4D] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform scale-0 group-hover:scale-100">
                  <Star size={20} fill="#0F2A4D" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1A3C6E] mb-2">{product.title}</h3>
                <p className="text-[#0F2A4D]/70 mb-6">{product.description}</p>
                
                <Dialog open={open && selectedProduct?.id === product.id} onOpenChange={(isOpen) => {
                  setOpen(isOpen);
                  if (isOpen) setSelectedProduct(product);
                }}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-[#0F2A4D] hover:bg-[#1A3C6E] text-[#FDF8F3] font-bold py-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:bg-[#D4AF37] group-hover:text-[#0F2A4D]"
                    >
                      <Sparkles size={18} />
                      Ask a Grown-Up to Get This
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-[#FDF8F3] border-[#D4AF37]">
                    <DialogHeader>
                      <DialogTitle className="text-[#1A3C6E] text-2xl">Ask a Grown-Up!</DialogTitle>
                      <DialogDescription className="text-[#0F2A4D]/70 text-base">
                        Want {product.title}? Enter your parent's email and we'll send them a link to check it out!
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleRequest} className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1A3C6E] font-bold">Parent's Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="parent@example.com" 
                          required
                          value={parentEmail}
                          onChange={(e) => setParentEmail(e.target.value)}
                          className="border-[#D4AF37] focus:ring-[#D4AF37]"
                        />
                      </div>
                      <Button type="submit" disabled={loading} className="w-full bg-[#D4AF37] text-[#0F2A4D] hover:bg-[#8B5E3C] hover:text-white font-bold text-lg">
                        {loading ? 'Sending...' : 'Send Request 🚀'}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopTheSpot;