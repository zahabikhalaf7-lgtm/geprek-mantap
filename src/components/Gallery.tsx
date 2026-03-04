'use client';

import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76690b67f61?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-bromo-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-black mb-6">Galeri Kami</h2>
          <div className="flex gap-6 border-b border-white/10 pb-4">
            <button className="text-bromo-orange font-bold border-b-2 border-bromo-orange pb-4 -mb-4.5">Semua</button>
            <button className="text-gray-400 hover:text-white font-medium transition-colors">Menu</button>
            <button className="text-gray-400 hover:text-white font-medium transition-colors">Outlet</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Item */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group"
          >
            <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase border border-white px-4 py-2">Lihat Detail</span>
            </div>
          </motion.div>

          {/* Other Items */}
          {images.slice(1).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden h-64 relative group"
            >
              <img src={img} alt={`Gallery ${index + 2}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase border border-white px-4 py-2">Lihat Detail</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
