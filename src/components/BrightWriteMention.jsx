import React from 'react';
import ToolCard from './ToolCard';
import { PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const BrightWriteMention = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1A3C6E]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ToolCard
            title="BrightWrite"
            description="A creative writing support tool that helps young writers develop their voice and confidence. BrightWrite provides gentle guidance, prompts, and encouragement for storytelling and creative expression."
            benefits={[
              "Writing prompts and inspiration",
              "Confidence building",
              "Creative voice development",
              "Writing skill progression"
            ]}
            icon={PenTool}
            ctaText="See This in Action at Broski's Bodega"
            ctaLink="https://www.youtube.com/@broskisbodega"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BrightWriteMention;