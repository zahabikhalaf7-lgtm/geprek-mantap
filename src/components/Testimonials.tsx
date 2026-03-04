'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'via Google Review',
    content: 'Gepreknya beneran pedes nampol! Sambal bawangnya juara, gak cuma pedes tapi gurih. Ayamnya juga crispy banget walaupun udah disiram sambal. Fix jadi langganan makan siang kantor.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Sarah Wijaya',
    role: 'Super Partner',
    content: 'Suka banget sama pelayanan di sini, cepet banget. Pas laper berat gak perlu nunggu lama. Porsinya juga jumbo sesuai nama, kenyang pol. Tempatnya bersih dan adem.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Budi Santoso',
    role: 'Platinum',
    content: 'Rekomendasi banget buat yang suka tantangan pedas. Level 5 nya bener-bener bikin keringetan tapi nagih. Minumnya es teh jumbo pas banget buat netralisir. Mantap!',
    image: 'https://randomuser.me/api/portraits/men/86.jpg'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#161311]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-bromo-orange font-bold tracking-widest text-sm uppercase">Kata Mereka</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">Apa Kata Pelanggan Setia?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bromo-card p-8 rounded-2xl border border-white/5 relative"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-bromo-orange text-bromo-orange" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed">&quot;{item.content}&quot;</p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full border-2 border-bromo-orange" />
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
