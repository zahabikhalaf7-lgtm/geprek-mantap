'use client';

import { Instagram } from 'lucide-react';

const instaImages = [
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2026&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76690b67f61?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-[#161311]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-black mb-2">Ikuti Kami di Instagram</h2>
            <p className="text-gray-400">@geprekbromo</p>
          </div>
          <button className="bg-bromo-orange hover:bg-bromo-orange-hover text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-colors">
            <Instagram size={20} />
            Follow Us
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {instaImages.map((img, index) => (
            <div key={index} className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-bromo-card hover:border-bromo-orange transition-colors cursor-pointer">
              <img src={img} alt="Instagram" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
