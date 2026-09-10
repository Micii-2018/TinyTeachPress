import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { WifiOff, ShieldCheck, Target, Tent, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { emailService } from '@/lib/emailService';

const OfflineEmailCapturePage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', kidAge: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.kidAge) {
      toast({
        title: "Missing fields",
        description: "Please fill out all fields to join the club.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailService.sendOfflineSurvivalClubEmail(
        formData.name,
        formData.email,
        formData.kidAge
      );
      
      toast({
        title: "Success! 🎉",
        description: "Routing you to the dashboard...",
      });
      
      // Allow toast to show briefly before redirect
      setTimeout(() => {
        navigate('/offline/thank-you');
      }, 800);

    } catch (error) {
      toast({
        title: "Error joining",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Offline Survival Club - Tiny Teach Press</title>
        <meta name="description" content="100% screen-free challenges for young gamers. Unplug the screen. Keep the adventure." />
      </Helmet>

      <div className="min-h-screen bg-osc-navy font-sans selection:bg-osc-teal selection:text-osc-navy text-white flex flex-col">
        <Header />

        <main className="flex-grow pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Split Layout: Content + Form */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Sales Copy & Branding */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 bg-osc-teal/10 border border-osc-teal/30 px-4 py-2 rounded-full">
                  <Tent className="text-osc-teal" size={20} />
                  <span className="text-osc-teal font-bold uppercase tracking-widest text-sm">
                    Offline Survival Club
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] text-white">
                  100% Screen-Free Challenges For <span className="text-osc-teal">Young Gamers!</span>
                </h1>

                <p className="text-2xl font-bold text-osc-orange">
                  Unplug the Screen. Keep the Adventure.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed font-medium max-w-lg">
                  Does your 7-10 year old love Minecraft and Roblox but struggles to disconnect? 
                  Get our premium activity book series packed with logic puzzles, crafting blueprints, 
                  and real-world missions designed specifically for gamer brains.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                  <div className="flex flex-col p-4 bg-white/5 rounded-xl border border-white/10">
                    <WifiOff className="text-osc-teal mb-2" size={28} />
                    <span className="text-2xl font-black text-white mb-1">0%</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Wi-Fi Needed</span>
                  </div>
                  <div className="flex flex-col p-4 bg-white/5 rounded-xl border border-white/10">
                    <Target className="text-osc-red mb-2" size={28} />
                    <span className="text-2xl font-black text-white mb-1">20</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Planned Activities</span>
                  </div>
                  <div className="flex flex-col p-4 bg-white/5 rounded-xl border border-white/10">
                    <ShieldCheck className="text-osc-orange mb-2" size={28} />
                    <span className="text-2xl font-black text-white mb-1">7-10</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Target Age</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Lead Capture Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Decorative border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-osc-teal to-osc-red rounded-3xl transform rotate-2 opacity-50 blur-sm"></div>
                
                <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-black text-osc-navy uppercase tracking-tight mb-2">
                      Get 3 Free Puzzles Now!
                    </h2>
                    <p className="text-gray-600 font-medium text-sm">
                      Join the club to download your free starter pack.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-osc-navy font-bold text-sm uppercase tracking-wide">
                        Grown-up Name
                      </Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex"
                        className="bg-gray-50 border-2 border-gray-200 focus-visible:border-osc-teal focus-visible:ring-osc-teal/20 text-osc-navy font-medium text-lg py-6 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-osc-navy font-bold text-sm uppercase tracking-wide">
                        Grown-up Email
                      </Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@example.com"
                        className="bg-gray-50 border-2 border-gray-200 focus-visible:border-osc-teal focus-visible:ring-osc-teal/20 text-osc-navy font-medium text-lg py-6 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="kidAge" className="text-osc-navy font-bold text-sm uppercase tracking-wide">
                        Kid's Age (Numbers Only)
                      </Label>
                      <Input 
                        id="kidAge"
                        name="kidAge"
                        type="number"
                        min="4"
                        max="16"
                        value={formData.kidAge}
                        onChange={handleChange}
                        placeholder="8"
                        className="bg-gray-50 border-2 border-gray-200 focus-visible:border-osc-teal focus-visible:ring-osc-teal/20 text-osc-navy font-medium text-lg py-6 rounded-xl"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-osc-orange hover:bg-orange-600 text-white uppercase font-black tracking-widest text-lg py-8 rounded-xl shadow-lg shadow-osc-orange/30 transition-all hover:-translate-y-1"
                    >
                      {isLoading ? 'Joining...' : 'Join The Club'}
                      {!isLoading && <Send className="ml-2" size={20} />}
                    </Button>
                    <p className="text-center text-xs text-gray-400 font-medium">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default OfflineEmailCapturePage;