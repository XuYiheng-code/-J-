'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2003',
    title: '出道元年',
    description: '以专辑《乐行者》正式出道，凭借独特的嗓音和创作才华崭露头角',
    highlight: '首张专辑',
  },
  {
    year: '2004',
    title: '江南走红',
    description: '《江南》专辑发行，同名主打歌传唱大江南北，成为华语经典',
    highlight: '江南',
  },
  {
    year: '2005-2008',
    title: '风格探索',
    description: '《第二天堂》《编号89757》《JJ陆》连续发力，奠定情歌王子地位',
    highlight: '三连发',
  },
  {
    year: '2010',
    title: '她说',
    description: '专辑《她说》发行，从男声视角重新诠释经典情歌，引发共鸣',
    highlight: '她说',
  },
  {
    year: '2013-2014',
    title: '实力绽放',
    description: '《学不会》《新地球》展现成熟音乐风格，演唱会遍布全球',
    highlight: '世界巡演',
  },
  {
    year: '2016-2017',
    title: '巅峰之作',
    description: '《和自己对话》《伟大的渺小》专辑，突破性创作，入围金曲奖',
    highlight: '金曲奖',
  },
  {
    year: '2020',
    title: '双专辑发行',
    description: '《幸存者》《如你》双专辑发行，探讨生命与命运主题',
    highlight: '双专辑',
  },
  {
    year: '2024',
    title: '咖啡故事',
    description: '《JJ的咖啡调到几点》用音乐讲述人生故事，持续创新',
    highlight: '新专辑',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-[var(--accent-primary)] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-gold)] text-sm tracking-[0.4em] uppercase font-light">
            Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="text-white">音乐历程</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
            20年音乐之路，每一步都是经典
          </p>
          <div className="w-24 h-px mx-auto mt-8" style={{ background: 'var(--accent-gold)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* 中线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-[var(--accent-primary)]/30 to-transparent" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 时间点 */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--bg-secondary)]" />
                </div>

                {/* 内容 */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} w-full md:w-1/2 pl-8 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-lg bg-[var(--bg-tertiary)]/50 border border-white/5 hover:border-[var(--accent-primary)]/30 transition-colors duration-300"
                  >
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] mb-3">
                      {item.highlight}
                    </span>
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* 移动端时间点 */}
                <div className="absolute left-0 md:hidden">
                  <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)]" />
                </div>

                {/* 空白 */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
