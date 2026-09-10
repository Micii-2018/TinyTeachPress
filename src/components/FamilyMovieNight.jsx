import React from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import FamilyTechNightCard from './FamilyTechNightCard';

const FamilyMovieNight = () => {
  return (
    <section className="py-16 bg-[#FDF8F3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FamilyTechNightCard
            title="Family Movie & Conversation Night"
            description="Turn passive watching into active thinking. Watch a tech-focused film together and use our discussion guide to talk about ethics, innovation, and the future."
            icon={Film}
            howToRun={[
              "Choose a movie from our curated list (e.g., Big Hero 6, The Mitchells vs. the Machines).",
              "Print the 'Tech Talk' discussion cards.",
              "Watch the movie with zero phone distractions.",
              "Discuss the questions over popcorn or dessert afterwards."
            ]}
            benefits={[
              "Critical thinking about technology's role in society.",
              "Understanding AI and robotics concepts in context.",
              "Bonding through shared narrative experiences.",
              "Safe space to discuss digital fears and hopes."
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyMovieNight;