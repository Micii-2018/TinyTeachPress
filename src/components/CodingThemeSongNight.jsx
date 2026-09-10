import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import FamilyTechNightCard from './FamilyTechNightCard';

const CodingThemeSongNight = () => {
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
            title="Code Your Family Theme Song"
            description="Music meets logic! Use block-based coding to compose a unique 8-bit theme song for your family. No musical experience required."
            icon={Music}
            howToRun={[
              "Open a free block coding music tool (like Scratch or Sonic Pi).",
              "Experiment with loops to create a drum beat.",
              "Add a melody using variables for pitch.",
              "Save your song and use it as a ringtone for family calls!"
            ]}
            benefits={[
              "Introduction to algorithmic thinking and loops.",
              "Creative application of logic.",
              "Immediate, audible feedback on code.",
              "Fun, personalized digital artifact."
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CodingThemeSongNight;