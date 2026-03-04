'use client';

import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SiWhatsapp, SiGrab } from 'react-icons/si';
import { FaMotorcycle } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a0807] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">

        {/* CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Siap Memesan?</h2>
          <p className="text-gray-400 mb-10">
            Jangan tunda laparmu. Pesan sekarang dan rasakan ledakan rasa langsung ke pintu rumahmu.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* GoFood */}
            <a
              href="#"
              className="group flex items-center gap-3 bg-bromo-card hover:bg-bromo-orange border border-white/10 hover:border-bromo-orange text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 min-w-[180px] justify-center shadow-lg hover:shadow-bromo-orange/20 hover:-translate-y-1"
            >
              <span className="w-8 h-8 rounded-full bg-[#EE3124] flex items-center justify-center shrink-0">
                <FaMotorcycle size={16} className="text-white" />
              </span>
              <span>GoFood</span>
            </a>

            {/* GrabFood */}
            <a
              href="#"
              className="group flex items-center gap-3 bg-bromo-card hover:bg-bromo-orange border border-white/10 hover:border-bromo-orange text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 min-w-[180px] justify-center shadow-lg hover:shadow-bromo-orange/20 hover:-translate-y-1"
            >
              <span className="w-8 h-8 rounded-full bg-[#00B14F] flex items-center justify-center shrink-0">
                <SiGrab size={14} className="text-white" />
              </span>
              <span>GrabFood</span>
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="group flex items-center gap-3 bg-bromo-card hover:bg-bromo-orange border border-white/10 hover:border-bromo-orange text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 min-w-[180px] justify-center shadow-lg hover:shadow-bromo-orange/20 hover:-translate-y-1"
            >
              <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <SiWhatsapp size={16} className="text-white" />
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-bromo-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ðŸ”¥</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Geprek Mantap</span>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#location" className="hover:text-white transition-colors">Outlets</a>
            <a href="#promo" className="hover:text-white transition-colors">Promo</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bromo-orange transition-colors text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bromo-orange transition-colors text-white">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bromo-orange transition-colors text-white">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div className="text-center mt-10 text-xs text-gray-600">
          Â© 2025 Geprek Mantap. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

