import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const FeaturedBooksSection = () => {
  const { addItem } = useCart();

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-wide text-gold font-medium mb-1.5">{product.series}</p>
                <h3 className="font-display text-xl text-ink font-medium mb-2">{product.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-5 flex-1">{product.blurb}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg text-ink">${product.price.toFixed(2)}</span>
                  <Button
                    onClick={() => addItem(product)}
                    className="bg-forest hover:bg-forest-deep text-white font-medium"
                  >
                    <ShoppingBag size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-ink-soft/70 text-center mt-10">
          More titles are on the way — this shelf grows as new books launch.
        </p>
      </div>
    </section>
  );
};

export default FeaturedBooksSection;
