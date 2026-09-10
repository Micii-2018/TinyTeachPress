import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const BooksSpotlight = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">Books</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-semibold">Books Kids Actually Beg to Reread</h2>
          </div>
          <Link to="/books" className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-forest-deep">
            Shop all books <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <Link to="/books" className="flex gap-5 items-start">
                <div className="w-28 h-36 flex-none rounded-lg overflow-hidden border border-border">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="pt-1">
                  <p className="text-xs uppercase tracking-wide text-gold font-medium mb-1.5">{product.series}</p>
                  <h3 className="font-display text-lg text-ink font-medium leading-snug mb-1.5">{product.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{product.blurb}</p>
                  <p className="text-sm text-forest font-medium mt-2">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSpotlight;
