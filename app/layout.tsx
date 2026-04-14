import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TW Stock Dashboard",
  description: "Taiwan stock dashboard deployed on GitHub and Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              TW Stock Dashboard
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-slate-600">
              <Link href="/">首頁</Link>
              <Link href="/market">大盤</Link>
              <Link href="/stocks">個股</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-500">
            © 2026 TW Stock Dashboard
          </div>
        </footer>
      </body>
    </html>
  );
}
