import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Compass, FileCheck2, GraduationCap, PiggyBank, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const stages = [
  {
    icon: Compass,
    title: 'College Discovery',
    body: 'Finding the right college starts with knowing your kid, not a ranking list.',
    items: ['Finding the Right College', 'Interests & Strengths', 'Major Exploration', 'Career Exploration', 'Internship Exploration', 'College Fit & Match'],
  },
  {
    icon: FileCheck2,
    title: 'Admissions',
    body: 'Applications, essays, and interviews — broken into steps that don’t overwhelm.',
    items: ['Applications', 'Personal Statements', 'Essays', 'Interviews', 'Resume Building'],
  },
  {
    icon: PiggyBank,
    title: 'Paying for College',
    body: 'The money conversation, made less scary.',
    items: ['Scholarships', 'FAFSA', 'Financial Aid', 'Affordability Planning', 'Budgeting for College'],
  },
  {
    icon: GraduationCap,
    title: 'College Transition',
    body: 'The summer before, and the first weeks after.',
    items: ['Preparing for College', 'Moving Away', 'Independence Skills', 'Parent Transition', 'What to Expect'],
  },
  {
    icon: TrendingUp,
    title: 'Thriving in College',
    body: 'The first 90 days set the tone for the next four years.',
    items: ['First 90 Days', 'Belonging & Relationships', 'Time Management', 'Study Skills', 'Managing Stress', 'Finances in College', 'AI for Learning', 'Staying on Track'],
  },
];

const CollegeSuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>College Success | Tiny Teach Press</title>
        <meta name="description" content="Get into college. Thrive in college. Succeed beyond college — a step-by-step system for families." />
      </Helmet>
      <div className="min-h-screen bg-paper">
        <Header />
        <main>
          <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 bg-white border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">College Success</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink font-semibold leading-tight">
                  Get In. Thrive. Succeed Beyond It.
                </h1>
                <p className="mt-5 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
                  A step-by-step system to get into college, thrive while you're there, and come out ready for what's next.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16 sm:py-20 bg-paper">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.title}
                    id={stage.title.toLowerCase().replace(/\s+/g, '-')}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl border border-border p-8"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center flex-none">
                        <Icon className="text-forest" size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gold font-medium mb-1">Stage {i + 1}</p>
                        <h2 className="font-display text-2xl text-ink font-semibold">{stage.title}</h2>
                      </div>
                    </div>
                    <p className="text-ink-soft mb-5">{stage.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {stage.items.map((item) => (
                        <span key={item} className="text-xs font-medium text-ink-soft bg-paper border border-border rounded-full px-3 py-1.5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CollegeSuccessPage;
