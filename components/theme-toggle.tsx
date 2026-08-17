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
    // DEBUG 모드에서만 로그 출력 (프로덕션에서는 표시 안됨)
    if (process.env.NEXT_PUBLIC_DEBUG) {
      console.log('현재 테마:', resolvedTheme);
    }

    const newTheme = isDark ? 'light' : 'dark';

    if (process.env.NEXT_PUBLIC_DEBUG) {
      console.log('변경할 테마:', newTheme);
    }

    // next-themes가 자동으로 DOM 클래스를 관리하므로 setTheme만 호출하면 됨
    setTheme(newTheme);
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
