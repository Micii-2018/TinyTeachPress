import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const activities = [
  {
    icon: PlayCircle,
    title: "Watch and Wonder",
    description: "Check out fun videos and awesome ideas to start your creativity!",
    color: "bg-blue-500",
    linkText: "Watch and Wonder",
    linkUrl: "https://www.youtube.com/@BroskiReads",
    external: true
  },
  {
    icon: BookOpen,
    title: "Read and Try",
    description: "Discover stories that teach you how things work and get you ready to create.",
    color: "bg-yellow-500",
    linkText: "Read and Try",
    linkUrl: "/books",
    external: false
  },
  {
    icon: Hammer,
    title: "Build and Create",
    description: "Find your next big project, gather your tools, and let's build!",
    color: "bg-green-500",
    linkText: "Build and Create",
    linkUrl: "/books",
    external: false
  }
];

const FunActivities = () => {
  return (
    <section id="fun-activities" className="py-20 bg-[#FDF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-[#1A3C6E] mb-4"
          >
            Fun Activities
          </motion.h2>
          <p className="text-xl text-[#0F2A4D]/70 max-w-2xl mx-auto">
            Pick a path and start an adventure!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-b-4 border-[#D4AF37] flex flex-col"
            >
              <div className={`w-16 h-16 ${activity.color} rounded-2xl flex items-center justify-center mb-6 shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                <activity.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A3C6E] mb-3">{activity.title}</h3>
              <p className="text-[#0F2A4D]/70 text-lg leading-relaxed mb-6 flex-1">
                {activity.description}
              </p>
              
              <div className="mt-auto">
                {activity.external ? (
                  <a href={activity.linkUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#D4AF37] hover:bg-[#8B5E3C] text-[#0F2A4D] hover:text-white font-bold py-6 rounded-xl shadow-md transition-all text-lg">
                      {activity.linkText}
                    </Button>
                  </a>
                ) : (
                  <Link to={activity.linkUrl}>
                    <Button className="w-full bg-[#D4AF37] hover:bg-[#8B5E3C] text-[#0F2A4D] hover:text-white font-bold py-6 rounded-xl shadow-md transition-all text-lg">
                      {activity.linkText}
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunActivities;