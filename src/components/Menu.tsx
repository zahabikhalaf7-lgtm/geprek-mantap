'use client';

import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Ayam Geprek Sambal Bawang',
    description: 'Ayam goreng crispy dibalut sambal bawang yang pedas gurih, disajikan dengan nasi hangat dan lalapan.',
    price: 'Rp 25.000',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2026&auto=format&fit=crop',
    spicyLevel: 3
  },
  {
    id: 2,
    name: 'Ayam Geprek Sambal Hijau',
    description: 'Sensasi pedas segar dari cabai hijau pilihan yang diulek kasar, meresap hingga ke tulang.',
    price: 'Rp 27.000',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop',
    spicyLevel: 2
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-[#161311]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-bromo-orange font-bold tracking-widest text-sm uppercase">Pilihan Favorit</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2 mb-4">Menu Andalan Kami</h2>
          <div className="w-20 h-1 bg-bromo-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-bromo-card rounded-2xl overflow-hidden border border-white/5 hover:border-bromo-orange/30 transition-colors group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className={`text-xs ${i < item.spicyLevel ? 'text-bromo-orange' : 'text-gray-600'}`}>🌶️</span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-bromo-orange transition-colors">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black font-mono">{item.price}</span>
                  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-bromo-orange flex items-center justify-center transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-bromo-orange hover:text-white font-bold tracking-wider uppercase border-b-2 border-bromo-orange pb-1 transition-colors">
            Lihat Semua Menu →
          </button>
        </div>
      </div>
    </section>
  );
}
