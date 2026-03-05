'use client';

import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-bromo-dark relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Visit Our Volcano</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Experience the heat in person. Find the nearest Kafe outlet and taste the legend.
            </p>

            <div className="bg-bromo-card p-8 rounded-3xl border border-white/5 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-bromo-orange text-2xl">ðŸ¢</span>
                <h3 className="text-xl font-bold text-bromo-orange">Main Outlet (Pusat)</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-gray-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold">Jl. Merapi No. 88, Kemang</div>
                    <div className="text-gray-500 text-sm">South Jakarta, 12730</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-gray-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold">Open Daily: 10:00 AM - 10:00 PM</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-gray-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold">+62 812-3456-7890</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-colors">
                  <Navigation size={18} /> Directions
                </button>
                <button className="flex-1 bg-bromo-orange hover:bg-bromo-orange-hover text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-colors">
                  <Phone size={18} /> Call Now
                </button>
              </div>
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.052136474176!2d106.81162231476932!3d-6.256852995470981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17b682662d9%3A0x6905677e53a3641!2sKemang%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1625637282931!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="Kafe Location"
            ></iframe>

            {/* Custom Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-12 h-12 bg-bromo-orange rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">ðŸ´</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


