'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Promo() {
  return (
    <section id="promo" className="py-20 bg-[#161311]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center items-center mb-10">
          <h2 className="text-3xl font-black text-center">Promo Spesial Bulan Ini</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bromo-card rounded-3xl overflow-hidden border border-bromo-orange/20 flex flex-col md:flex-row shadow-2xl shadow-bromo-orange/10"
          >
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop"
                alt="Paket Puas 10 Ribu"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-bromo-orange text-white font-black text-xl px-6 py-3 rounded-br-2xl shadow-lg">
                CUMA 10K!
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-red-500/20 text-red-500 text-xs font-bold px-3 py-1 rounded-full uppercase w-fit mb-4">
                Limited Time Offer
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-4">Paket Kenyang Gila</h3>
              <p className="text-gray-300 text-lg mb-6">
                Bayar <strong>Rp 10.000</strong> udah dapet Ayam Crispy + kenikmatan ambil sepuasnya!
              </p>

              <div className="space-y-3 mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="font-bold text-bromo-orange mb-2 uppercase tracking-wider text-sm">Ambil Sepuasnya (Refill):</div>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" /> Nasi Putih
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" /> Sambal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" /> Es Teh Tawar
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" /> Lalapan Segar
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300 col-span-2">
                    <CheckCircle2 size={16} className="text-green-500" /> Sop Kaldu
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <div>
                  <div className="text-sm text-gray-500 line-through">Rp 25.000</div>
                  <div className="text-4xl font-black text-bromo-orange">Rp 10.000</div>
                </div>
                <button className="bg-bromo-orange hover:bg-bromo-orange-hover text-white px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-bromo-orange/30 transform hover:-translate-y-1">
                  Serbu Sekarang!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
