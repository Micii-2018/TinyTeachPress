import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, PenLine, Share2, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { emailService } from '@/lib/emailService';

const steps = [
  {
    icon: Sparkles,
    title: 'Spark',
    body: 'Bite-size prompts pull the story out of your kid — no blank-page panic, no "I don’t know what to write."',
  },
  {
    icon: PenLine,
    title: 'Shape',
    body: 'Guided edits for clarity, facts, and voice. Works with AI (used responsibly) or fully unplugged — your call.',
  },
  {
    icon: Share2,
    title: 'Share',
    body: 'Export as a flipbook or a print-ready PDF. A real book, made by them, that they can actually hold.',
  },
];

const included = [
  'Story starters for every age and interest',
  'Layout templates that make any draft look like a real book',
  'A simple cover builder',
  'One-click export to flipbook or print-ready PDF',
];

const BrightWriteJrPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({ title: 'Invalid email', description: 'Please enter a valid email address.', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailService.sendFormEmail({ email, submissionType: 'brightwrite_jr_waitlist' });
      toast({ title: "You're on the list!", description: "We'll email you the moment early access opens." });
      setEmail('');
    } catch {
      toast({ title: 'Something went wrong', description: 'Please try again in a moment.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>BrightWrite Jr. | Tiny Teach Press</title>
        <meta name="description" content="From ideas to real books—together. BrightWrite Jr. is a guided book-maker kit for kids, with or without AI." />
      </Helmet>
      <div className="min-h-screen bg-paper">
        <Header />
        <main>
          <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 bg-white border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">BrightWrite Jr.</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink font-semibold leading-tight">
                  From Ideas to Real Books—Together.
                </h1>
                <p className="mt-5 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
                  A guided book-maker kit that turns your kid's idea into a real, finished book — a flipbook or a printed page they can hold.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20 sm:py-24 bg-paper">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-2xl p-8 border border-border"
                    >
                      <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                        <Icon className="text-forest" size={22} />
                      </div>
                      <h3 className="font-display text-xl text-ink font-medium mb-2">{step.title}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">{step.body}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-24 bg-white border-t border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">What's inside</p>
                <h2 className="font-display text-3xl text-ink font-semibold mb-5">The Book-Maker Kit</h2>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-soft">
                      <BookOpen size={18} className="text-forest mt-0.5 flex-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-ink-soft/80">
                  Works with AI (used responsibly) or fully unplugged — pick whichever fits your family.
                </p>
              </div>

              <div className="bg-paper rounded-2xl border border-border p-8">
                <h3 className="font-display text-xl text-ink font-medium mb-2">Join the waitlist</h3>
                <p className="text-sm text-ink-soft mb-6">
                  Early access, a 10% launch discount, and a preview pack — first come, first served.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-full border border-border bg-white text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-forest hover:bg-forest-deep text-white font-medium py-3 rounded-full disabled:opacity-50"
                  >
                    {isSubmitting ? 'Joining…' : 'Join the Waitlist'}
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BrightWriteJrPage;
