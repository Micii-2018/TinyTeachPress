import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Users, Mic, Send, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { emailService } from '@/lib/emailService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields before sending.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailService.sendFormEmail({
        ...formData,
        submissionType: 'contact'
      });

      toast({
        title: "Message Sent! 🚀",
        description: "Thank you! Your message has been sent to Hello@tinyteachpress.com",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["Hello@tinyteachpress.com", "info@tinyteachpress.com"],
      action: "mailto:Hello@tinyteachpress.com",
      linkText: "Send an email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["347 903 1839"],
      action: "tel:3479031839",
      linkText: "Give us a ring"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Bergen Street", "Brooklyn NY"],
      action: "https://maps.google.com/?q=Bergen+Street,+Brooklyn,+NY",
      linkText: "Get directions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Tiny Teach Press</title>
        <meta 
          name="description" 
          content="Get in touch with Tiny Teach Press. Reach out for speaking inquiries, school partnerships, or just to say hello. We love hearing from families and educators!" 
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* HERO SECTION */}
          <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3C6E] to-[#0F2A4D]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              {/* Decorative blurs */}
              <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-[80px] opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5E3C] rounded-full mix-blend-overlay filter blur-[80px] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 backdrop-blur-sm rounded-full px-5 py-2 mb-4">
                  <MessageSquare className="text-[#D4AF37]" size={18} />
                  <span className="text-[#FDF8F3] font-medium tracking-wide">
                    We'd Love to Hear From You
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#FDF8F3] tracking-tight">
                  Get in <span className="text-[#D4AF37]">Touch</span>
                </h1>
                <p className="text-lg sm:text-2xl text-[#FDF8F3]/90 max-w-2xl mx-auto leading-relaxed font-light">
                  Whether you have a question, a partnership idea, or just want to share a success story, we're all ears.
                </p>
              </motion.div>
            </div>
          </section>

          {/* MAIN CONTENT GRID */}
          <section className="py-16 sm:py-24 bg-[#FDF8F3] relative z-20 -mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Contact Info Column (Left) */}
                <div className="lg:col-span-1 space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="w-12 h-12 bg-[#FDF8F3] rounded-full flex items-center justify-center mb-4">
                        <info.icon className="text-[#1A3C6E]" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A3C6E] mb-2">{info.title}</h3>
                      <div className="space-y-1 mb-4">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      <a 
                        href={info.action} 
                        className="text-[#D4AF37] font-semibold hover:text-[#8B5E3C] transition-colors flex items-center gap-2 group"
                      >
                        {info.linkText}
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Form (Right/Center) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100"
                >
                  <h2 className="text-3xl font-bold text-[#1A3C6E] mb-2">Send us a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-[#0F2A4D]">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-[#0F2A4D]">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-[#0F2A4D]">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#8B5E3C] text-[#0F2A4D] hover:text-white font-bold py-4 px-8 text-lg shadow-md transition-all duration-300"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SPECIALIZED INQUIRIES */}
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Speaking Inquiries */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-[#1A3C6E] rounded-2xl p-8 text-[#FDF8F3] relative overflow-hidden group shadow-lg"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Mic size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-6 text-[#1A3C6E]">
                      <Mic size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Speaking Inquiries</h3>
                    <p className="text-[#FDF8F3]/80 mb-8 leading-relaxed">
                      Looking for a dynamic speaker for your next conference, school event, or workshop? We cover topics on digital literacy, family tech habits, and empowering the next generation of creators.
                    </p>
                    <Button 
                      onClick={() => toast({ title: "Inquiry Started", description: "Please use the contact form or email us directly for speaking engagements." })}
                      className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A3C6E] transition-colors font-semibold"
                    >
                      Request a Speaker
                    </Button>
                  </div>
                </motion.div>

                {/* School Partnerships */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-[#0F2A4D] rounded-2xl p-8 text-[#FDF8F3] relative overflow-hidden group shadow-lg"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-6 text-[#1A3C6E]">
                      <Users size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">School Partnerships</h3>
                    <p className="text-[#FDF8F3]/80 mb-8 leading-relaxed">
                      Bring Tiny Teach Press to your school! We offer bulk book orders, curriculum consulting, and parent education nights designed to bridge the gap between home and school technology use.
                    </p>
                    <Button 
                       onClick={() => toast({ title: "Inquiry Started", description: "Please use the contact form or email us directly for partnership opportunities." })}
                      className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A3C6E] transition-colors font-semibold"
                    >
                      Partner With Us
                    </Button>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default ContactPage;