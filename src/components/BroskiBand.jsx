import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BroskiBand = () => {
  return (
    <section className="py-16 sm:py-20 bg-paper border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex-none rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center">
            <span className="font-display text-4xl sm:text-5xl text-forest">B</span>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-2">Broski's Book Spot</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink font-semibold mb-3">Meet Broski</h2>
            <p className="text-ink-soft max-w-xl mb-5">Your kid's guide to the best next read, one pick at a time.</p>
            <Link
              to="/broski"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-forest-deep"
            >
              See Broski's picks <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BroskiBand;
