import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FamilyTechNightCard = ({ 
  title, 
  description, 
  howToRun, 
  benefits, 
  icon: Icon, 
  ctaText = "Download Starter Kit" 
}) => {
  const handleDownload = () => {
    toast({
      title: "Download Started! 🚀",
      description: `The starter kit for "${title}" is on its way to your device.`,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="p-8 flex flex-col h-full">
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-6">
          <div className="flex-shrink-0 w-16 h-16 bg-[#1A3C6E] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 text-[#D4AF37]">
            <Icon size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#1A3C6E] mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8 flex-grow">
          {/* How to Run Column */}
          <div className="bg-[#FDF8F3] p-6 rounded-lg border border-[#D4AF37]/20">
            <h4 className="font-bold text-[#0F2A4D] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xs">1</span>
              How to Run It
            </h4>
            <ul className="space-y-3">
              {howToRun.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#1A3C6E]/90 text-sm">
                  <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-[#D4AF37]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Column */}
          <div className="p-2">
            <h4 className="font-bold text-[#0F2A4D] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#1A3C6E] text-white flex items-center justify-center text-xs">2</span>
              What They Learn
            </h4>
            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-green-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <Button 
            onClick={handleDownload}
            className="w-full bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white font-bold py-6 text-lg shadow-md transition-all group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            {ctaText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FamilyTechNightCard;