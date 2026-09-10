import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { emailService } from '@/lib/emailService';

const EmailCapture = () => {
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
      toast({ title: 'You’re in!', description: 'Check your inbox for the free chapter.' });
      setEmail('');
    } catch {
      toast({ title: 'Something went wrong', description: 'Please try again in a moment.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-magnet" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.14em] uppercase text-gold-soft font-medium mb-3">Free chapter</p>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold mb-3">Get the Free Guide</h2>
          <p className="text-paper/70 mb-8">Read the first chapter of The Living Blue Saga before anyone else — straight to your inbox.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" size={17} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isSubmitting}
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-white/15 bg-white text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gold hover:bg-gold-soft text-ink font-medium px-7 py-3.5 rounded-full disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : 'Send Me the Chapter'}
            </Button>
          </form>
          <p className="text-xs text-paper/40 mt-5">No spam, ever. Just helpful updates from Tiny Teach Press.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;
