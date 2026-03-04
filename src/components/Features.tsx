'use client';

import { motion } from 'motion/react';
import { Leaf, Flame, Utensils, Wallet } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-bromo-orange" />,
    title: 'Bahan Segar',
    description: 'Ayam segar pilihan dari peternakan lokal terbaik setiap hari, tanpa bahan pengawet.'
  },
  {
    icon: <Flame className="w-8 h-8 text-bromo-orange" />,
    title: 'Sambal Racikan',
    description: 'Resep sambal turun temurun dengan cabai rawit merah asli yang pedasnya nendang.'
  },
  {
    icon: <Utensils className="w-8 h-8 text-bromo-orange" />,
    title: 'Porsi Jumbo',
    description: 'Porsi nasi dan ayam yang melimpah, dijamin kenyang untuk makan siang atau malam.'
  },
  {
    icon: <Wallet className="w-8 h-8 text-bromo-orange" />,
    title: 'Harga Terjangkau',
    description: 'Nikmati rasa premium bintang lima dengan harga ramah di kantong.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-bromo-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-bromo-orange font-bold tracking-widest text-sm uppercase">Keunggulan Kami</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">Kenapa Pilih Geprek Mantap?</h2>
          </div>
          <div className="mt-4 md:mt-0 bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            <span className="text-bromo-orange">ðŸ‘¥</span>
            <span className="font-bold">10.000+</span>
            <span className="text-xs text-gray-400">Pelanggan Puas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bromo-card p-8 rounded-2xl border border-white/5 hover:border-bromo-orange/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-bromo-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-bromo-orange/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

