import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookHeart, FileText, HelpingHand, MessageSquare, Printer, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const resources = [
  { icon: FileText, title: 'Quick Guides', body: 'Short, practical reads for the questions that come up most.' },
  { icon: Printer, title: 'Printable Tools', body: 'Checklists and trackers you can print and stick on the fridge.' },
  { icon: MessageSquare, title: 'Conversation Starters', body: 'Simple prompts to open up the harder conversations.', link: '/family-guidance' },
  { icon: BookHeart, title: 'Recommended Books & Apps', body: "Broski's picks and a few tools we actually trust.", link: '/broski' },
  {
    icon: ShieldCheck,
    title: 'NYC Schools Opt-Out',
    body: 'Parent privacy opt-out form for NYC public schools, 2026–27.',
    href: '/downloads/nyc-parent-privacy-opt-out.pdf',
  },
  { icon: HelpingHand, title: 'Support & Help', body: 'Not sure where to start? Reach out and we\'ll point you the right way.', link: '/contact' },
];

const ParentResourcesPage = () => {
  return (
    <>
      <Helmet>
        <title>Parent Resources | Tiny Teach Press</title>
        <meta name="description" content="A single destination for parents to access guides, tools, and downloads." />
      </Helmet>
      <div className="min-h-screen bg-paper">
        <Header />
        <main>
          <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 bg-white border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">Parent Resources</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink font-semibold leading-tight">
                  All in One Place
                </h1>
                <p className="mt-5 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
                  Guides, tools, and downloads for parents — no digging through the whole site to find them.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16 sm:py-20 bg-paper">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
              {resources.map((r, i) => {
                const Icon = r.icon;
                const cardClass = 'block bg-white rounded-2xl border border-border p-7 h-full hover:border-forest/40 transition-colors';
                const cardContent = (
                  <>
                    <Icon className="text-forest mb-4" size={22} />
                    <h3 className="font-display text-lg text-ink font-medium mb-1.5">{r.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{r.body}</p>
                  </>
                );
                return (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                        {cardContent}
                      </a>
                    ) : r.link ? (
                      <Link to={r.link} className={cardClass}>
                        {cardContent}
                      </Link>
                    ) : (
                      <div className={cardClass}>{cardContent}</div>
                    )}
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

export default ParentResourcesPage;
