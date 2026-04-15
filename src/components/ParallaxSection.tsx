'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function ParallaxSection({ children, className = '', speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {isMounted && (
        <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// 全局视差背景组件
export function GlobalParallax() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const y1 = useTransform(scrollY, [0, 3000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -200]);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)', filter: 'blur(100px)' }} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15"
        style={{
          y: y1,
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-10"
        style={{
          y: y2,
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}
