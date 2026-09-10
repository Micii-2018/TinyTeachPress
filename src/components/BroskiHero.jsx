import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Youtube, ArrowDown } from 'lucide-react';

const BroskiHero = () => {
  const scrollToActivities = () => {
    const element = document.getElementById('fun-activities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A3C6E] pt-20">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A3C6E] via-[#0F2A4D] to-[#8B5E3C] opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50 font-semibold text-sm tracking-wider mb-4">
            OFFICIAL HANGOUT
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#FDF8F3] mb-4 tracking-tight">
            Welcome to <span className="text-[#D4AF37]">Broski's Book Spot</span>
          </h1>
          <p className="text-xl sm:text-3xl text-[#FDF8F3]/80 font-light">
            Watch. Try. Build. Create.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12 w-full max-w-2xl"
        >
          <div className="absolute inset-0 bg-[#D4AF37] rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/30">
            <img 
              src="https://horizons-cdn.hostinger.com/9768d149-2b46-46bd-9a03-d83abc5a5ef9/1000032118-H2zDx.png" 
              alt="Broski enjoying a book and ready to create"
              className="w-full h-auto object-cover max-h-[500px]"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4D]/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-[#FDF8F3] font-bold text-lg">"Let's make something cool!"</p>
              <p className="text-[#D4AF37] text-sm">- Broski</p>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <a 
            href="https://www.youtube.com/@BroskiReads" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#8B5E3C] text-[#0F2A4D] hover:text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <Youtube size={24} />
              Watch on YouTube
            </Button>
          </a>
          
          <Button 
            onClick={scrollToActivities}
            className="w-full sm:w-auto bg-transparent hover:bg-[#FDF8F3]/10 text-[#FDF8F3] border-2 border-[#FDF8F3]/50 font-bold text-lg py-6 px-8 rounded-xl transition-all flex items-center gap-2"
          >
            Explore Fun Stuff
            <ArrowDown size={20} />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default BroskiHero;