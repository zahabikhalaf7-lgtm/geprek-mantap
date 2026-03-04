import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Features from '@/components/Features';
import Promo from '@/components/Promo';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import InstagramFeed from '@/components/InstagramFeed';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-bromo-dark text-white font-sans selection:bg-bromo-orange selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Story />
                <Menu />
                <Features />
                <Promo />
                <Gallery />
                <Testimonials />
                <FAQ />
                <InstagramFeed />
                <Location />
            </main>
            <Footer />
        </div>
    );
}
