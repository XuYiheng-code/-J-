'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const concerts = [
  {
    id: 1,
    name: '时线演唱会',
    location: '台北站',
    year: '2024',
    description: '最新巡演，用音乐串联过去与未来',
    songs: ['她说', '不为谁而作的歌', '伟大的渺小'],
  },
  {
    id: 2,
    name: 'She Says',
    location: '世界巡演',
    year: '2023',
    description: '浪漫情歌重现经典',
    songs: ['她说', '小酒窝', '记得'],
  },
  {
    id: 3,
    name: '圣所演唱会',
    location: '上海站',
    year: '2019',
    description: '万人合唱感动全场',
    songs: ['江南', '裂缝中的阳光', '乐行者'],
  },
  {
    id: 4,
    name: '时线新人时代',
    location: '台北站',
    year: '2015',
    description: '早期经典演唱会',
    songs: ['爱笑的眼睛', '一千年以后', '编号89757'],
  },
];

export default function Concerts() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="concerts" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-gold)] text-sm tracking-[0.4em] uppercase font-light">
            Live
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="text-white">现场演绎</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
            每一场演出，都是独一无二的音乐体验
          </p>
          <div className="w-24 h-px mx-auto mt-8" style={{ background: 'var(--accent-gold)' }} />
        </motion.div>

        {/* Concerts Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {concerts.map((concert, index) => (
            <motion.div
              key={concert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className={`relative overflow-hidden rounded-xl bg-[var(--bg-tertiary)] border border-white/5 ${
                  expandedId === concert.id ? 'md:col-span-2' : ''
                }`}
                onClick={() => setExpandedId(expandedId === concert.id ? null : concert.id)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* 背景 */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg,
                      ${index % 2 === 0 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(212, 175, 55, 0.15)'} 0%,
                      var(--bg-tertiary) 70%)`,
                  }}
                />

                {/* 装饰元素 */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="text-[12rem] md:text-[16rem] opacity-5 select-none"
                    style={{ color: index % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-gold)' }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    ♪
                  </motion.div>
                </div>

                {/* 内容 */}
                <div className="relative z-10 p-6 md:p-8">
                  {/* 年份标签 */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                      {concert.year}
                    </span>
                    <span className="text-[var(--text-muted)] text-sm">{concert.location}</span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {concert.name}
                  </h3>
                  <p className="text-[var(--text-secondary)]">{concert.description}</p>

                  {/* 展开显示歌单 */}
                  <AnimatePresence>
                    {expandedId === concert.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <p className="text-[var(--text-muted)] text-sm mb-3">演唱曲目</p>
                          <div className="flex flex-wrap gap-2">
                            {concert.songs.map((song, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full text-xs bg-white/5 text-[var(--text-secondary)] border border-white/10"
                              >
                                {song}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 点击提示 */}
                  <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[var(--text-muted)] text-sm">
                    {expandedId === concert.id ? '−' : '+'}
                  </div>
                </div>

                {/* 悬停边框效果 */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none"
                  animate={{
                    borderColor: expandedId === concert.id ? 'rgba(139, 92, 246, 0.5)' : 'transparent',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
