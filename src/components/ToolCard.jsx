import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, PlayCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { emailService } from '@/lib/emailService';
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

const ToolCard = ({ title, description, benefits, icon: Icon, ctaText, ctaLink }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailService.sendFormEmail({
        ...formData,
        resource_type: title,
        submissionType: 'download_request'
      });
      
      toast({
        title: "Download Link Sent! 🚀",
        description: `Check your email for the ${title} resources!`,
      });
      
      setFormData({ name: '', email: '' });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem processing your request.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D4AF37]/20 h-full flex flex-col"
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#1A3C6E] to-[#0F2A4D] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
            <Icon className="text-[#D4AF37]" size={32} />
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#1A3C6E] mb-4">
          {title}
        </h3>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="bg-[#FDF8F3] rounded-xl p-6 mb-8 border border-[#D4AF37]/10 flex-grow">
          <h4 className="font-semibold text-[#0F2A4D] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            Key Benefits
          </h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-[#1A3C6E]/80">
                <Check className="text-[#D4AF37] mt-1 flex-shrink-0" size={16} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          {ctaLink ? (
            <a 
              href={ctaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                className="w-full bg-[#D4AF37] text-[#0F2A4D] hover:bg-[#D4AF37]/90 font-bold py-6 text-lg shadow-md hover:shadow-lg transition-all group"
              >
                {ctaText || "Learn More"}
                <PlayCircle className="ml-2 group-hover:scale-110 transition-transform" size={20} />
              </Button>
            </a>
          ) : (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-[#D4AF37] text-[#0F2A4D] hover:bg-[#D4AF37]/90 font-bold py-6 text-lg shadow-md hover:shadow-lg transition-all group"
                >
                  {ctaText || "Download Tool"}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get This Tool</DialogTitle>
                  <DialogDescription>
                    We'll email you a copy of the {title} along with instructions.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor={`name-${title}`}>Name</Label>
                    <Input 
                      id={`name-${title}`}
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({...p, name: e.target.value}))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`email-${title}`}>Email</Label>
                    <Input 
                      id={`email-${title}`}
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData(p => ({...p, email: e.target.value}))}
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-[#1A3C6E] text-white hover:bg-[#0F2A4D] font-bold">
                    {loading ? "Sending..." : "Send Me The Tool"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ToolCard;