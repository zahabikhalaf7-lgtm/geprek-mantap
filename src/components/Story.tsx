'use client';

import { motion } from 'motion/react';

export default function Story() {
  return (
    <section className="py-20 bg-bromo-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2070&auto=format&fit=crop"
                alt="Cobek Sambal"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md p-4 rounded-lg border-l-4 border-bromo-orange">
                <h3 className="text-xl font-bold uppercase">Asli Indonesia</h3>
                <p className="text-sm text-gray-300">Resep Turun Temurun</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-2 leading-tight">
              Cerita di Balik <br />
              <span className="text-bromo-orange">Kafe</span>
            </h2>
            <div className="w-20 h-1 bg-bromo-orange mb-8 rounded-full"></div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Lahir dari inspirasi kekuatan alam Nusantara, kami menghadirkan cita rasa pedas yang otentik dan berani.
            </p>

            <p className="text-gray-400 mb-10 text-sm leading-relaxed">
              Setiap potong ayam kami dimarinasi selama 12 jam dengan rempah rahasia, digoreng dengan teknik khusus hingga kulitnya ekstra renyah, dan disajikan dengan sambal yang diulek segar (dadakan) setiap Anda memesan. Bukan sekadar pedas, tapi rasa yang membekas.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-bromo-orange mb-1">100%</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Bahan Segar</div>
              </div>
              <div className="text-center border-l border-white/10">
                <div className="text-3xl font-black text-bromo-orange mb-1">24</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Jam Marinas</div>
              </div>
              <div className="text-center border-l border-white/10">
                <div className="text-3xl font-black text-bromo-orange mb-1">HOT</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Sambal Dadak</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


