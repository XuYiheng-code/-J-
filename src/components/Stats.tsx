'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: '20+',
    label: '音乐生涯',
    unit: '年',
    description: '持续创作',
  },
  {
    number: '14',
    label: '录音室专辑',
    unit: '张',
    description: '张张经典',
  },
  {
    number: '100+',
    label: '演唱会',
    unit: '场',
    description: '遍布全球',
  },
  {
    number: '1000+',
    label: '音乐作品',
    unit: '首',
    description: '词曲创作',
  },
];

const achievements = [
  {
    title: '金曲奖最佳男歌手',
    year: '2013',
    description: '台湾金曲奖华语乐坛最高荣誉',
  },
  {
    title: '新加坡金曲奖',
    year: '2011',
    description: '最受欢迎男歌手',
  },
  {
    title: '中国原创音乐榜',
    year: '2008',
    description: '最佳制作人',
  },
  {
    title: '全球华语榜中榜',
    year: '2015',
    description: '最佳男歌手',
  },
];

export default function Stats() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-primary)] relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                <span className="text-white">{stat.number}</span>
              </div>
              <div className="text-[var(--accent-primary)] text-sm tracking-wider mb-1">{stat.label}</div>
              <div className="text-[var(--text-secondary)] text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--accent-gold)] text-sm tracking-[0.4em] uppercase font-light">
            Awards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">荣誉成就</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-5 rounded-lg bg-[var(--bg-secondary)] border border-white/5 hover:border-[var(--accent-gold)]/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-[var(--accent-gold)]/10">
                <span className="text-[var(--accent-gold)] text-2xl font-bold">{achievement.year.slice(-2)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold truncate">{achievement.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm truncate">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
