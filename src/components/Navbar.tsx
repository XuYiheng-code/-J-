'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';

const navItems = [
  { label: '首页', href: '#' },
  { label: '历程', href: '#timeline' },
  { label: '专辑', href: '#albums' },
  { label: '演唱会', href: '#concerts' },
  { label: '关于', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 滚动进度条 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-gold)] to-[var(--accent-primary)] z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button type="button" onClick={scrollToTop} className="flex items-center gap-3 group cursor-pointer" aria-label="返回首页">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-gold)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold tracking-wider text-white group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  JJ LIN
                </span>
                <p className="text-[10px] tracking-[0.2em] text-[var(--text-secondary)] -mt-1">
                  MUSIC
                </p>
              </div>
            </button>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-white transition-colors duration-300 group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button type="button" className="md:hidden text-white p-2 cursor-pointer" aria-label="菜单">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
