import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "JJ Lin 林俊杰 | 用声音，触动心跳",
  description: "林俊杰（JJ Lin）官方网站。20年音乐旅程，每一张专辑都是经典。了解他的音乐作品、演唱会信息和个人故事。",
  keywords: "林俊杰, JJ Lin, 音乐, 演唱会, 专辑, 江南, 她说",
  authors: [{ name: "JJ Lin Fan" }],
  openGraph: {
    title: "JJ Lin 林俊杰 | 用声音，触动心跳",
    description: "林俊杰（JJ Lin）官方网站。20年音乐旅程，每一张专辑都是经典。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] cursor-none">
        <Preloader />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
