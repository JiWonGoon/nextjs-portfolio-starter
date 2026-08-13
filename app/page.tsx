import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12 max-w-4xl">
      {/* 히어로 섹션 */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          포트폴리오 스타터킷
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Next.js, TypeScript, Tailwind CSS를 사용한 빠른 포트폴리오 프로젝트 시작
        </p>
      </section>

      {/* 기능 섹션 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">🎨 다크모드</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              next-themes로 구현된 밝은 테마와 어두운 테마 전환
            </p>
          </div>
          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">📱 반응형 디자인</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tailwind CSS를 사용한 완벽한 반응형 레이아웃
            </p>
          </div>
          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">📝 폼 컴포넌트</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              React Hook Form과 Zod를 사용한 타입 안전한 폼
            </p>
          </div>
          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">⚡ 빠른 성능</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Next.js 15의 최신 최적화 기능 포함
            </p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="space-y-6 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-lg">
        <div>
          <h2 className="text-2xl font-bold mb-2">시작하기</h2>
          <p className="text-slate-600 dark:text-slate-400">
            예제 페이지에서 폼 컴포넌트와 레이아웃을 확인하세요.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/examples" className="px-6 py-2 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-md font-medium hover:opacity-90 transition-opacity inline-block">
            예제 보기
          </Link>
          <Link href="/portfolio" className="px-6 py-2 border border-slate-300 dark:border-slate-600 rounded-md font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors inline-block">
            포트폴리오 템플릿
          </Link>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">기술 스택</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Next.js 15', icon: '⚛️', url: 'https://nextjs.org' },
            { name: 'TypeScript', icon: '📘', url: 'https://www.typescriptlang.org' },
            { name: 'Tailwind CSS', icon: '🎨', url: 'https://tailwindcss.com' },
            { name: 'React Hook Form', icon: '📋', url: 'https://react-hook-form.com' },
            { name: 'Zod', icon: '✅', url: 'https://zod.dev' },
            { name: 'next-themes', icon: '🌓', url: 'https://github.com/pacocoursey/next-themes' },
          ].map(tech => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
              <p className="text-sm font-medium">{tech.name}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 hover:underline">공식 사이트 →</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
