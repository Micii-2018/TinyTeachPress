import React from 'react';
import ToolCard from './ToolCard';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const DigitalStorytellingGuide = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FDF8F3] relative overflow-hidden">
       {/* Decorative blob */}
       <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ToolCard
            title="Digital Storytelling Guide"
            description="Empower kids to tell their stories through digital media. This tool helps families create, share, and celebrate stories using photos, videos, and text in ways that build confidence and creative expression."
            benefits={[
              "Creative expression through media",
              "Storytelling frameworks",
              "Technical skill building",
              "Family story preservation"
            ]}
            icon={Sparkles}
            ctaText="See This in Action at Broski's Bodega"
            ctaLink="https://www.youtube.com/@broskisbodega"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalStorytellingGuide;