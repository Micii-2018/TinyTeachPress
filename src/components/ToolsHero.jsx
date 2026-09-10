import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ToolsHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1694532409273-b26e2ce266ea"
          alt="Child engaged with creative tools"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E]/95 via-[#0F2A4D]/90 to-[#1A3C6E]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4D] to-transparent opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 backdrop-blur-sm rounded-full px-5 py-2 mb-4"
          >
            <Sparkles className="text-[#D4AF37]" size={18} />
            <span className="text-[#FDF8F3] font-medium tracking-wide">
              Tiny Teach Press Toolbox
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#FDF8F3] tracking-tight leading-tight">
            Tools for <span className="text-[#D4AF37]">Curious Kids</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#FDF8F3]/90 max-w-3xl mx-auto leading-relaxed font-light">
            Playful, intelligent tools designed to spark curiosity, creativity, and critical thinking.
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDF8F3] to-transparent" />
    </section>
  );
};

export default ToolsHero;