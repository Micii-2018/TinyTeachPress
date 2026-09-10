import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Rocket } from 'lucide-react';

const steps = [
  { icon: BookOpen, title: 'Read It', description: 'Start with a story that hooks them — relatable characters facing real-world tech challenges.' },
  { icon: Rocket, title: 'Try It', description: 'Close the book and open the toolbox. Every story includes a hands-on experiment or build.' },
  { icon: Lightbulb, title: 'Own It', description: 'Turn concepts into capability. When kids build it themselves, they understand it forever.' },
];

const ReadItTryItPhilosophy = () => {
  return (
    <section className="py-20 sm:py-24 bg-paper">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-semibold mb-3">The "Read It. Try It." Philosophy</h2>
          <p className="text-ink-soft max-w-xl mx-auto">
            We believe reading shouldn't be passive. Our books are launching pads for doing, making, and figuring things out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                  <Icon className="text-forest" size={22} />
                </div>
                <h3 className="font-display text-xl text-ink font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReadItTryItPhilosophy;
