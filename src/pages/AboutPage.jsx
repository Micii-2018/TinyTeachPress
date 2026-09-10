import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Users, Shield, Rocket } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const ValueCard = ({
  title,
  description,
  icon: Icon,
  delay
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay
  }} whileHover={{
    y: -8,
    scale: 1.02
  }} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D4AF37]/10 group h-full flex flex-col">
      <div className="w-14 h-14 bg-[#FDF8F3] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 transition-colors">
        <Icon className="text-[#1A3C6E] group-hover:text-[#D4AF37] transition-colors duration-300" size={28} />
      </div>
      <h3 className="text-xl font-bold text-[#1A3C6E] mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </motion.div>;
};
const AboutPage = () => {
  const values = [{
    title: "Competence",
    description: "We believe kids are capable of doing hard things and learning deeply when given the right tools and encouragement.",
    icon: Brain
  }, {
    title: "Imagination",
    description: "Technology should be a canvas for creativity and wonder, expanding a child's world rather than limiting it.",
    icon: Sparkles
  }, {
    title: "Family-Led Learning",
    description: "Parents and caregivers are the primary guides in their children's tech journey, setting the tone for healthy habits.",
    icon: Users
  }, {
    title: "Confidence",
    description: "We empower families with the knowledge and vocabulary to lead technology conversations without fear.",
    icon: Shield
  }, {
    title: "Capability",
    description: "Every child has the potential to move from passive consumer to active creator and thoughtful technology user.",
    icon: Rocket
  }];
  return <>
      <Helmet>
        <title>About Tiny Teach Press - Our Story & Mission</title>
        <meta name="description" content="Empowering families to lead confident technology conversations. Meet the founder and discover our mission to raise capable, creative kids." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* HERO SECTION */}
          <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3C6E] to-[#0F2A4D]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              {/* Abstract shapes */}
              <div className="absolute top-20 left-20 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#8B5E3C] rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#FDF8F3] tracking-tight">
                  About <span className="text-[#D4AF37]">Tiny Teach Press</span>
                </h1>
                <p className="text-lg sm:text-2xl text-[#FDF8F3]/90 max-w-3xl mx-auto leading-relaxed font-light">
                  Empowering families to lead confident technology conversations.
                </p>
              </motion.div>
            </div>
          </section>

          {/* FOUNDER STORY SECTION */}
          <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div initial={{
                opacity: 0,
                x: -50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8
              }}>
                  <div className="inline-block px-4 py-1.5 bg-[#FDF8F3] text-[#D4AF37] font-bold rounded-full text-sm mb-6 border border-[#D4AF37]/20">
                    OUR STORY
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] mb-6">
                    Believing Kids Can Do Hard Things
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Hello! I'm the founder of Tiny Teach Press, but first and foremost, I'm a mom. I've spent years in with families in their living rooms, watching children and parents struggle with a world that is increasingly digital.
                    </p>
                    <p>
                      I noticed a gap. While technology was everywhere, the <em>conversations</em> about it were often fear-based or overly technical. Parents felt overwhelmed, and kids were left to figure it out on their own.
                    </p>
                    <p>
                      I founded Tiny Teach Press on a simple but radical belief: <strong>Kids are capable.</strong> They don't just need protection from technology; they need preparation. They need parents who feel confident enough to sit down, open a book or a tool, and say, "Let's figure this out together."
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                x: 50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8
              }} className="relative">
                  <div className="absolute inset-0 bg-[#D4AF37] rounded-2xl transform rotate-3 opacity-20 translate-x-4 translate-y-4"></div>
                  <img src="https://images.unsplash.com/photo-1693778201108-b0af10cbc93a" alt="Parent and child reading together" className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5] md:aspect-auto" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* MISSION SECTION */}
          <section className="py-20 bg-[#FDF8F3]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2A4D] mb-8">Our Mission</h2>
                <p className="text-xl sm:text-2xl text-[#1A3C6E] leading-relaxed font-medium">
                  "To empower families with the knowledge, tools, and confidence to navigate technology together—ensuring kids develop critical thinking, creativity, and capability while parents lead the conversation."
                </p>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-10 rounded-full"></div>
              </motion.div>
            </div>
          </section>

          {/* VISION SECTION */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E] to-[#0F2A4D]"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div initial={{
                opacity: 0,
                x: -50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8
              }} className="order-2 md:order-1">
                  <img src="https://images.unsplash.com/photo-1681487097558-8856c9212cb0" alt="Family learning together" className="rounded-2xl shadow-2xl border-4 border-[#FDF8F3]/10 w-full object-cover" />
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                x: 50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8
              }} className="order-1 md:order-2 text-white">
                  <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 text-[#D4AF37] font-bold rounded-full text-sm mb-6 border border-[#D4AF37]/40">
                    OUR VISION
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    A Future of Capable Learners
                  </h2>
                  <p className="text-lg sm:text-xl text-[#FDF8F3]/90 leading-relaxed mb-6">
                    We see a world where every family feels equipped and confident to guide their children's relationship with technology, where kids thrive as capable learners and creative thinkers.
                  </p>
                  <p className="text-[#FDF8F3]/80 leading-relaxed">
                    It's not about banning screens or blindly accepting them. It's about intentionality. We are building a community where technology serves the family, sparking curiosity rather than stifling it.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* VALUES SECTION */}
          <section className="py-20 bg-[#FDF8F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] mb-4">Our Core Values</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  These principles guide everything we create, from our books to our tools.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => <ValueCard key={index} {...value} delay={index * 0.1} />)}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>;
};
export default AboutPage;