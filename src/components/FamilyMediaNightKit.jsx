import React from 'react';
import ToolCard from './ToolCard';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const FamilyMediaNightKit = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FDF8F3] relative overflow-hidden">
       {/* Decorative blob */}
       <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ToolCard
            title="Family Media Night Kit"
            description="Transform screen time into meaningful family moments. This tool helps families create intentional, engaging experiences around media that spark conversations and deepen connections."
            benefits={[
              "Structured family bonding time",
              "Guided discussion prompts",
              "Age-appropriate content curation",
              "Shared learning experiences"
            ]}
            icon={Users}
            ctaText="See This in Action at Broski's Bodega"
            ctaLink="https://www.youtube.com/@broskisbodega"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyMediaNightKit;