import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-5"
        >
          Tiny Teach Press
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink leading-[1.08]"
        >
          Growing Outstanding Young Minds
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed"
        >
          Books, characters, and tools that turn young readers into confident thinkers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/books">
            <Button size="lg" className="bg-forest hover:bg-forest-deep text-white font-medium text-base px-8 py-6 shadow-sm">
              Shop the Books
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
          <a href="#lead-magnet" className="text-sm font-medium text-ink-soft hover:text-forest transition-colors underline decoration-border underline-offset-4">
            Get the Free Guide
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
          <img
            src="https://horizons-cdn.hostinger.com/9768d149-2b46-46bd-9a03-d83abc5a5ef9/1000032118-H2zDx.png"
            alt="A child reading and building with Tiny Teach Press books"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
