import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const brands = [
  {
    name: 'BrightWrite Jr.',
    tagline: 'From ideas to real books—together.',
    body: 'Bite-size prompts, guided edits, and a real flipbook or printed page at the end. Works with AI or fully unplugged.',
    cta: 'Learn more',
    path: '/brightwrite-jr',
    external: false,
  },
  {
    name: 'Thinkers Rising',
    tagline: '52 weeks. 52 activities.',
    body: 'A year of critical-thinking activities families can do together or kids can do solo.',
    cta: 'Get the workbook',
    path: '/thinkers-rising',
    external: false,
  },
];

const CompanionBrandsTeaser = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border p-7"
          >
            <h3 className="font-display text-xl text-ink font-medium mb-1">{brand.name}</h3>
            <p className="text-gold text-sm font-medium mb-3">{brand.tagline}</p>
            <p className="text-sm text-ink-soft leading-relaxed mb-5">{brand.body}</p>
            <Link to={brand.path} className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-forest-deep">
              {brand.cta} <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanionBrandsTeaser;
