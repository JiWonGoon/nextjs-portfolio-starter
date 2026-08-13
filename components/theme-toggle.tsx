'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-md border border-slate-300" disabled />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    console.log('현재 테마:', resolvedTheme);
    const newTheme = isDark ? 'light' : 'dark';
    console.log('변경할 테마:', newTheme);
    setTheme(newTheme);

    // 강제로 HTML 요소 업데이트
    setTimeout(() => {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, 0);
  };

  return (
    <button
      onClick={handleToggle}
      className="w-10 h-10 rounded-md border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      aria-label="테마 변경"
      type="button"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
