'use client';

import Link from 'next/link';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-bold text-lg hover:opacity-80 transition-opacity">
          <span>💼</span>
          <span>Portfolio Kit</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/examples" className="text-sm font-medium hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
            예제
          </Link>
          <Link href="/portfolio" className="text-sm font-medium hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
            포트폴리오
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
