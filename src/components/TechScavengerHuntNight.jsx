import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import FamilyTechNightCard from './FamilyTechNightCard';

const TechScavengerHuntNight = () => {
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
            title="Tech Scavenger Hunt Night"
            description="Demystify the hardware around you. A hands-on adventure to find, identify, and understand the sensors and computers hiding in your home."
            icon={Search}
            howToRun={[
              "Download the 'Sensor Safari' checklist.",
              "Hunt around the house for items (e.g., router, thermostat, camera lens).",
              "Use the guide to explain what each device actually does.",
              "Bonus: Draw a 'Network Map' of your home."
            ]}
            benefits={[
              "Digital literacy and vocabulary building.",
              "Understanding connectivity and the Internet of Things.",
              "Observational skills and curiosity.",
              "Realizing that internet isn't magic—it's hardware."
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechScavengerHuntNight;