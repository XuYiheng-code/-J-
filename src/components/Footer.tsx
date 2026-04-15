'use client';

import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/jjlin/', icon: 'IG' },
  { name: 'YouTube', url: 'https://www.youtube.com/@JJLinOfficial', icon: 'YT' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/7oPftvlwrD8FvnGSDWGBGM', icon: 'SP' },
  { name: 'Apple Music', url: 'https://music.apple.com/cn/artist/林俊杰/1719548', icon: 'AM' },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--bg-secondary)] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-wider" style={{
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              JJ LIN
            </Link>
            <p className="text-[var(--text-muted)] text-sm mt-2">用声音，触动心跳</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-all duration-300"
              >
                <span className="text-xs font-bold">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-[var(--text-muted)] text-sm">
            © 2024 JJ Lin. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] text-xs mt-2">
            This is a fan-made website for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
