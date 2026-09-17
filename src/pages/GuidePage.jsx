import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { emailService } from '@/lib/emailService';

const GuidePage = () => {
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
      await emailService.sendFormEmail({ email, submissionType: 'reading_challenge_guide' });
      toast({ title: "You're in!", description: 'Check your inbox for the free chapter.' });
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
        <title>Get the Free Guide | Tiny Teach Press</title>
        <meta name="description" content="Read the first chapter of The Living Blue Saga before anyone else." />
      </Helmet>
      <div className="min-h-screen bg-paper">
        <Header />
        <main className="pt-36 pb-24 sm:pt-44">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">Free chapter</p>
              <h1 className="font-display text-3xl sm:text-4xl text-ink font-semibold mb-4">Get the Free Guide</h1>
              <p className="text-ink-soft mb-8">
                Read the first chapter of The Living Blue Saga before anyone else — straight to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" size={17} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    className="w-full pl-11 pr-4 py-3.5 rounded-full border border-border bg-white text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-forest hover:bg-forest-deep text-white font-medium px-7 py-3.5 rounded-full disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Send Me the Chapter'}
                </Button>
              </form>
              <p className="text-xs text-ink-soft/70 mt-5">No spam, ever. Just helpful updates from Tiny Teach Press.</p>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GuidePage;
