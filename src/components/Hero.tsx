'use client';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop"
          alt="Spicy Fried Chicken"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bromo-dark via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bromo-orange/50 bg-bromo-orange/10 text-bromo-orange text-xs font-bold tracking-wider mb-6">
            <span>🔥</span> PEDASNYA SAMPAI KE UBUN-UBUN
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 uppercase italic">
            Geprek Pedas <br />
            <span className="text-bromo-orange">Khas Mantap</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            Nikmati sensasi pedas membara dari kawah Bromo langsung di lidah Anda.
            Ayam geprek premium dengan sambal korek khas yang bikin ketagihan.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-bromo-orange hover:bg-bromo-orange-hover text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-bromo-orange/20">
              Pesan Sekarang
            </button>
            <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition-all">
              Lihat Menu
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
