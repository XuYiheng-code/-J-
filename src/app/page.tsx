import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Timeline from '@/components/Timeline';
import Albums from '@/components/Albums';
import Concerts from '@/components/Concerts';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { GlobalParallax } from '@/components/ParallaxSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] relative">
      <GlobalParallax />
      <Navbar />
      <Hero />
      <Stats />
      <Timeline />
      <Albums />
      <Concerts />
      <About />
      <Footer />
    </main>
  );
}
