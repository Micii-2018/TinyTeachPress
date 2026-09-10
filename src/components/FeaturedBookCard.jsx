import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, MonitorPlay, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

const FeaturedBookCard = ({ title, description, image, formats, youtubeLink }) => {
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
        title: "Request Sent! 📬",
        description: "We'll send you more information about this book shortly!",
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
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden bg-[#0F2A4D]">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A3C6E] to-[#0F2A4D]">
            <Book className="text-[#D4AF37]/20 w-32 h-32" />
          </div>
        )}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {formats.map((format) => (
            <span 
              key={format}
              className="bg-[#FDF8F3]/95 backdrop-blur-sm text-[#0F2A4D] text-xs font-bold px-3 py-1 rounded-full shadow-sm"
            >
              {format}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#1A3C6E] mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 mt-auto">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button 
                className="w-full bg-[#1A3C6E] hover:bg-[#0F2A4D] text-white font-semibold py-6 text-lg shadow-md hover:shadow-lg transition-all"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request Information</DialogTitle>
                <DialogDescription>
                  Enter your details to receive updates and sample chapters from {title}.
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
                <Button type="submit" disabled={loading} className="w-full bg-[#D4AF37] text-[#0F2A4D] hover:bg-[#D4AF37]/90 font-bold">
                  {loading ? "Sending..." : "Send Info"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          {youtubeLink && (
            <a 
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                variant="outline"
                className="w-full border-2 border-[#D4AF37] text-[#1A3C6E] hover:bg-[#D4AF37]/10 hover:text-[#0F2A4D] font-medium py-6"
              >
                <MonitorPlay className="mr-2 w-5 h-5" />
                Watch Broski Bring This to Life
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedBookCard;