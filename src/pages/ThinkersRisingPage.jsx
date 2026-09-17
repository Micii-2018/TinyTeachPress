import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, Puzzle, Target, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getProduct } from '@/data/products';

const pillars = [
  { icon: Puzzle, title: 'Puzzles & Logic', body: 'Crosswords, word searches, codebreakers, and logic games that make thinking fun.' },
  { icon: Target, title: 'Problem Solving', body: 'Real-world challenges, team activities, and critical-thinking games with no screen required.' },
  { icon: Users, title: 'Family or Solo', body: 'Every activity works alone or as a family — no set schedule, no pressure to keep pace with anyone.' },
  { icon: Brain, title: '52 Weeks', body: 'One activity a week, all year. Enough to build a real habit, not just a weekend project.' },
];

const sampleWeek = {
  title: 'Sample Activity — Week 14: The Mystery in the Bag',
  steps: ['Observe: what can you tell without looking?', 'Hypothesize: what do you think is inside?', 'Test: check your guess.', 'Present: explain your reasoning to the family.'],
};

const ThinkersRisingPage = () => {
  const { addItem } = useCart();
  const product = getProduct('thinkers-rising-workbook');

  return (
    <>
      <Helmet>
        <title>Thinkers Rising | Tiny Teach Press</title>
        <meta name="description" content="52 weeks. 52 activities. A year of critical-thinking activities families can do together or kids can do solo." />
      </Helmet>
      <div className="min-h-screen bg-paper">
        <Header />
        <main>
          <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 bg-white border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">Thinkers Rising</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink font-semibold leading-tight">
                  52 Weeks. 52 Activities.
                </h1>
                <p className="mt-5 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
                  A full year of critical-thinking activities — one a week, no batteries required.
                </p>
                {product && (
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      size="lg"
                      onClick={() => addItem(product)}
                      className="bg-forest hover:bg-forest-deep text-white font-medium text-base px-8 py-6 shadow-sm"
                    >
                      Get the Workbook — ${product.price.toFixed(2)}
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          <section className="py-20 sm:py-24 bg-paper">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {pillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white rounded-2xl p-6 border border-border"
                    >
                      <Icon className="text-forest mb-4" size={22} />
                      <h3 className="font-display text-lg text-ink font-medium mb-1.5">{p.title}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-24 bg-white border-t border-border">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-paper rounded-2xl border border-border p-8">
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">Preview a week</p>
                <h2 className="font-display text-2xl text-ink font-semibold mb-5">{sampleWeek.title}</h2>
                <ol className="space-y-3">
                  {sampleWeek.steps.map((s, i) => (
                    <li key={s} className="flex gap-3 text-ink-soft">
                      <span className="font-display text-forest font-medium flex-none">{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ThinkersRisingPage;
