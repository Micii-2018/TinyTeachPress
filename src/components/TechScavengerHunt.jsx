import React from 'react';
import ToolCard from './ToolCard';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const TechScavengerHunt = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1A3C6E]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ToolCard
            title="Tech Scavenger Hunt"
            description="Turn everyday technology into an adventure. This tool helps families explore how technology works through playful, hands-on activities that build digital literacy and problem-solving skills."
            benefits={[
              "Hands-on tech exploration",
              "Problem-solving challenges",
              "Digital literacy building",
              "Family adventure and fun"
            ]}
            icon={Search}
            ctaText="See This in Action at Broski's Bodega"
            ctaLink="https://www.youtube.com/@broskisbodega"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechScavengerHunt;