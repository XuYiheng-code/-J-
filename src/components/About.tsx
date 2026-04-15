'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {/* 中心光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-10">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>
        {/* 装饰线条 */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/10 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/10 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        {/* 主标语 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* 装饰图标 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-4xl text-[var(--accent-primary)]">♪</span>
          </motion.div>

          {/* 引言 */}
          <blockquote className="text-2xl md:text-5xl font-light leading-[2] md:leading-[2.2]" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="text-[var(--accent-primary)] mr-2">"</span>
            <span className="text-white">音乐是我</span>
            <br />
            <span className="text-white">与世界对话的方式</span>
            <span className="text-[var(--accent-primary)] ml-2">"</span>
          </blockquote>

          {/* 作者 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <cite className="text-lg md:text-xl text-[var(--text-secondary)] not-italic tracking-widest">
              — 林俊杰 JJ Lin
            </cite>
          </motion.div>
        </motion.div>

        {/* 分隔线 */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-48 h-px mx-auto mb-16"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
          }}
        />

        {/* 个人简介 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-[2.2] max-w-2xl mx-auto">
            林俊杰（JJ Lin），新加坡人，2003年以专辑《乐行者》正式出道。
            <br className="my-4" />
            代表作包括《江南》《她说》《不为谁而作的歌》《伟大的渺小》等。
            <br className="my-4" />
            以其细腻的情感表达和现场演唱实力著称，被誉为
            <span className="text-[var(--accent-gold)]">"华语乐坛情歌王子"</span>。
          </p>

          {/* 数据展示 */}
          <div className="mt-16 flex justify-center items-start gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                20+
              </div>
              <div className="text-sm text-[var(--text-muted)] tracking-wider uppercase">
                音乐生涯
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">年</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                14
              </div>
              <div className="text-sm text-[var(--text-muted)] tracking-wider uppercase">
                录音室专辑
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">张</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                100+
              </div>
              <div className="text-sm text-[var(--text-muted)] tracking-wider uppercase">
                演唱会
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">场</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
