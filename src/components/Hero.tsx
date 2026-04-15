'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 多层背景光晕 - 增强版 */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* 主光晕 */}
        <motion.div
          className="w-[90vw] h-[90vw] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* 次级光晕 */}
        <motion.div
          className="w-[60vw] h-[60vw] rounded-full absolute"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* 装饰性线条 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/10 to-transparent" />
      </div>

      {/* 漂浮音符 - 增强数量 */}
      {['♪', '♫', '♬', '♩', '♭'].map((note, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-4xl opacity-30"
          style={{
            left: `${10 + i * 20}%`,
            top: `${15 + (i % 3) * 25}%`,
            color: i % 2 === 0 ? 'var(--accent-gold)' : 'var(--accent-primary)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          {note}
        </motion.div>
      ))}

      {/* 主内容 */}
      <div className="relative z-10 text-center px-4">
        {/* 副标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-[var(--accent-primary)] text-sm md:text-base tracking-[0.3em] uppercase font-light">
            Singer · Songwriter · Producer
          </span>
        </motion.div>

        {/* 主标题 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1
            className="text-[clamp(4rem,18vw,14rem)] font-bold leading-none tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <span className="block text-white drop-shadow-2xl">林俊杰</span>
          </h1>
        </motion.div>

        {/* 英文名 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2
            className="text-[clamp(2rem,10vw,7rem)] font-light tracking-[0.2em] mt-2"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-light) 50%, var(--accent-gold) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            JJ LIN
          </h2>
        </motion.div>

        {/* 座右铭 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-lg md:text-2xl text-[var(--text-secondary)] tracking-widest font-light"
        >
          用声音，触动心跳
        </motion.p>

        {/* 分隔线 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-32 h-px mx-auto mt-8"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
          }}
        />

        {/* 向下滚动指示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="w-6 h-10 mx-auto border border-white/20 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
