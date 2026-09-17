import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle, ShieldCheck, Sparkles, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { emailService } from '@/lib/emailService';

const groups = [
  {
    icon: MessageCircle,
    title: 'Family Conversations',
    items: ['Conversation Cards', 'Hard Topic Guides', 'Weekly Prompts', 'Reflection Activities', 'Family Check-In Challenges'],
  },
  {
    icon: Users,
    title: 'Family Activities',
    items: ['Learn AI Together', 'Create Together', 'Build a Book Together', 'Make a Song or Video Together', 'Weekly Family Challenges', 'Service & Give-Back Ideas'],
  },
  {
    icon: ShieldCheck,
    title: 'Technology & Wellbeing',
    items: ['Red / Yellow / Green Tech Checkup', 'Screen Balance Checklists', 'Family Tech Agreements', 'Healthy Tech Habits', 'Digital Safety'],
  },
  {
    icon: Heart,
    title: 'Parent Support',
    items: ['Parenting Guides', 'Milestone Guides', 'Development Stages', 'Support Strategies', 'Community Connections'],
  },
  {
    icon: Sparkles,
    title: 'AI Guides for Families',
    items: ['AI Literacy Guides', 'AI Prompting Guides', 'AI Safety & Ethics', 'AI at Home Guides', 'Tech Talk Starters', 'Digital Citizenship'],
  },
];

const FamilyGuidancePage = () => {
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
      await emailService.sendFormEmail({ email, submissionType: 'family_ai_conversations_guide' });
      toast({ title: "You're in!", description: 'Check your inbox for the guide.' });
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
        <title>Family Guidance & AI Tools | Tiny Teach Press</title>
        <meta name="description" content="Stronger families. Better conversations. Healthier tech habits. Practical guides for families raising kids in the age of AI." />
      </Helmet>
      <div className="min-h-screen bg-paper">
        <Header />
        <main>
          <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 bg-white border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold font-medium mb-3">Family Guidance & AI Tools</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink font-semibold leading-tight">
                  Stronger Families. Better Conversations.
                </h1>
                <p className="mt-5 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
                  Practical guides and conversation starters for families figuring out AI, screens, and everything in between — together.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16 sm:py-20 bg-paper">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
              {groups.map((group, i) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white rounded-2xl border border-border p-7"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <Icon className="text-gold" size={18} />
                    </div>
                    <h3 className="font-display text-lg text-ink font-medium mb-3">{group.title}</h3>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-ink-soft flex items-start gap-2">
                          <span className="text-forest mt-1.5">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="py-20 sm:py-24 bg-ink">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="font-body text-xs tracking-[0.14em] uppercase text-gold-soft font-medium mb-3">Free guide</p>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold mb-3">
                5 Conversations Every Family Should Have About AI
              </h2>
              <p className="text-paper/70 mb-8">Simple, powerful questions to start meaningful discussions with your kids.</p>
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
                  {isSubmitting ? 'Sending…' : 'Get the Guide'}
                </Button>
              </form>
              <p className="text-xs text-paper/40 mt-5">No spam, ever. Just helpful updates from Tiny Teach Press.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FamilyGuidancePage;
