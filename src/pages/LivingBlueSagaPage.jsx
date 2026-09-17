import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getProduct } from '@/data/products';

const LivingBlueSagaPage = () => {
  const { addItem } = useCart();
  const product = getProduct('living-blue-saga-1');

  return (
    <>
      <Helmet>
        <title>The Living Blue Saga | Tiny Teach Press</title>
        <meta name="description" content="The flagship chapter-book series from Tiny Teach Press — the story that started it all." />
      </Helmet>
      <div className="min-h-screen bg-paper">
        <Header />
        <main>
          <section className="pt-36 pb-20 sm:pt-44 sm:pb-24 bg-white border-b border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">The Living Blue Saga</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink font-semibold leading-tight mb-5">
                  The Story That Started It All
                </h1>
                <p className="text-lg text-ink-soft leading-relaxed mb-8">
                  A chapter-book series for kids who don't just want to read the adventure — they want to build it, test it, and live it. Every book comes with a discussion guide so the story keeps going long after the last page.
                </p>
                {product && (
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl text-ink">${product.price.toFixed(2)}</span>
                    <Button onClick={() => addItem(product)} className="bg-forest hover:bg-forest-deep text-white font-medium">
                      <ShoppingBag size={16} className="mr-2" />
                      Buy the Series
                    </Button>
                  </div>
                )}
              </motion.div>
              {product && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                  <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                    <img src={product.image} alt={product.title} className="w-full h-auto object-cover" />
                  </div>
                </motion.div>
              )}
            </div>
          </section>

          <section className="py-20 sm:py-24 bg-paper">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-display text-2xl sm:text-3xl text-ink font-semibold mb-4">A Discussion Guide for Every Book</h2>
              <p className="text-ink-soft leading-relaxed">
                Each title includes discussion questions, activity ideas, and educator pages — so families and classrooms can dig into the story together, not just read it and move on.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LivingBlueSagaPage;
