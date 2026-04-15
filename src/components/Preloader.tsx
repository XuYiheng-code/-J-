'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0A]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      {/* 背景光晕 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[60vw] h-[60vw] rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* 主内容 */}
      <div className="relative text-center">
        {/* Logo动画 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D4AF37] flex items-center justify-center">
            <span className="text-white font-bold text-3xl">J</span>
          </div>
        </motion.div>

        {/* 文字动画 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            林俊杰
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-[#8B5CF6] text-sm tracking-[0.3em] uppercase">
            JJ Lin · Music
          </p>
        </motion.div>

        {/* 加载条 */}
        <motion.div
          className="w-48 h-px bg-white/10 mx-auto mt-12 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* 加载文字 */}
        <motion.p
          className="text-[#666666] text-xs mt-4 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LOADING
        </motion.p>
      </div>
    </motion.div>
  );
}
