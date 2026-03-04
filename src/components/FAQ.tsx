'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is Geprek Mantap Halal?',
    answer: 'Yes, absolutely. All our ingredients are sourced from 100% Halal certified suppliers. We take great pride in serving food that adheres to strict Halal standards so everyone can enjoy our meals with peace of mind.'
  },
  {
    question: 'What are the spice levels?',
    answer: 'We offer 5 levels of spiciness. Level 0 (No Chili), Level 1 (Mild), Level 2 (Medium), Level 3 (Hot), and Level 5 (Volcano). Be careful with Level 5!'
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes, we are available on GoFood, GrabFood, and ShopeeFood. You can also order directly via WhatsApp for bulk orders.'
  },
  {
    question: 'Are there vegetarian options?',
    answer: 'Yes, we have Fried Mushroom (Jamur Crispy) and Fried Tofu/Tempeh packages which are very popular among vegetarians.'
  },
  {
    question: 'Where are your outlets located?',
    answer: 'Currently we have 5 outlets in South Jakarta (Kemang, Tebet, Blok M) and 2 in Central Jakarta. Check our Location section for details.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-bromo-dark">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-bromo-orange font-bold tracking-widest text-sm uppercase">Got Questions?</span>
          <h2 className="text-3xl font-black mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-bromo-card rounded-xl border border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-bromo-orange' : 'text-gray-500'}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

