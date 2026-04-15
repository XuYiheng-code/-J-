'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const albums = [
  {
    id: 1,
    name: '乐行者',
    year: '2003',
    description: '首张专辑，开启音乐之旅',
    image: `${basePath}/assets/albums/album-1.jpg`,
  },
  {
    id: 2,
    name: '第二天堂',
    year: '2005',
    description: '经典之作，江南传唱大街小巷',
    image: `${basePath}/assets/albums/album-2.jpg`,
  },
  {
    id: 3,
    name: '编号89757',
    year: '2005',
    description: '科幻概念，突破性音乐风格',
    image: `${basePath}/assets/albums/album-3.jpg`,
  },
  {
    id: 4,
    name: 'JJ陆',
    year: '2008',
    description: '小酒窝等金曲诞生',
    image: `${basePath}/assets/albums/album-4.jpg`,
  },
  {
    id: 5,
    name: '她说',
    year: '2010',
    description: '同名主打，触动无数人心',
    image: `${basePath}/assets/albums/album-5.jpg`,
  },
  {
    id: 6,
    name: '学不会',
    year: '2013',
    description: '情歌深度之作',
    image: `${basePath}/assets/albums/album-6.jpg`,
  },
  {
    id: 7,
    name: '新地球',
    year: '2014',
    description: '新专辑概念',
    image: `${basePath}/assets/albums/album-7.jpg`,
  },
  {
    id: 8,
    name: '学不会 Live',
    year: '2013',
    description: '现场演绎经典',
    image: `${basePath}/assets/albums/album-8.jpg`,
  },
];

export default function Albums() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="albums" className="py-24 md:py-32 bg-[var(--bg-primary)] relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-primary)] text-sm tracking-[0.4em] uppercase font-light">
            Discography
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="text-white">专辑作品</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
            20年音乐旅程，每一张专辑都是经典
          </p>
          {/* 分隔线 */}
          <div className="w-24 h-px mx-auto mt-8" style={{ background: 'var(--accent-primary)' }} />
        </motion.div>

        {/* Albums Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer ${
                  expandedId === album.id ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setExpandedId(expandedId === album.id ? null : album.id)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* 专辑封面 */}
                <div className="absolute inset-0">
                  <Image
                    src={album.image}
                    alt={album.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* 遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 hover:opacity-80 transition-opacity duration-300" />

                {/* 专辑信息 */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <motion.div
                    animate={{ y: expandedId === album.id ? 0 : 0 }}
                  >
                    <p className="text-[var(--accent-primary)] text-xs tracking-widest mb-2">
                      {album.year}
                    </p>
                    <h3 className="text-white font-bold text-lg md:text-xl truncate">
                      {album.name}
                    </h3>

                    {/* 展开显示详情 */}
                    <AnimatePresence>
                      {expandedId === album.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[var(--text-secondary)] text-sm mt-3 leading-relaxed">
                            {album.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* 点击指示器 */}
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs">
                    {expandedId === album.id ? '−' : '+'}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
