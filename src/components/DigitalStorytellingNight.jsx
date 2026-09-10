import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import FamilyTechNightCard from './FamilyTechNightCard';

const DigitalStorytellingNight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FamilyTechNightCard
            title="Digital Storytelling Night"
            description="Empower your kids to be creators, not just consumers. Use simple digital tools to write, illustrate, and narrate a family story together."
            icon={BookOpen}
            howToRun={[
              "Select a theme (e.g., 'The Day the Pet Took Over' or a family memory).",
              "Use a tablet or laptop with a simple slide or book creator app.",
              "Assign roles: Writer, Illustrator (photos/drawings), Narrator.",
              "Compile the story and hold a 'World Premiere' screening."
            ]}
            benefits={[
              "Creative expression using digital tools.",
              "Collaboration and teamwork skills.",
              "Understanding how media is constructed.",
              "Confidence in using technology for art."
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalStorytellingNight;