import React from 'react';
import { motion } from 'framer-motion';

const BooksHero = () => {
  return (
    <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">The Shelf</p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-semibold leading-tight">
            Books That Build Skills
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            Stories that don't just end on the last page — adventures for families who value competence, curiosity, and imagination.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BooksHero;
