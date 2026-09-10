import React from 'react';
import { motion } from 'framer-motion';

const TrustStrip = () => {
  return (
    <section className="py-16 sm:py-20 bg-paper border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-2xl sm:text-3xl text-ink leading-snug">
            "This is learning that sticks — because kids are doing it, not just hearing about it."
          </p>
          <footer className="mt-4 text-sm text-ink-soft">— A Tiny Teach Press parent</footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default TrustStrip;
