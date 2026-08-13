import Link from 'next/link';

export default function ExamplesPage() {
  const examples = [
    {
      title: '기본 폼',
      description: '텍스트 입력, 이메일, 선택 컴포넌트를 포함한 기본 폼 예제',
      href: '/examples/form-basic',
      icon: '📋',
    },
    {
      title: '검증 폼',
      description: 'Zod 스키마와 React Hook Form을 사용한 검증 기능이 있는 폼',
      href: '/examples/form-validation',
      icon: '✅',
    },
  ];

  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">예제</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          다양한 기능을 보여주는 예제들을 확인하세요.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examples.map(example => (
          <Link
            key={example.href}
            href={example.href}
            className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all"
          >
            <div className="text-4xl mb-4">{example.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{example.description}</p>
            <div className="mt-4 flex items-center text-sm font-medium text-slate-900 dark:text-slate-50 group">
              보러가기
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </section>

      {/* 컴포넌트 가이드 */}
      <section className="space-y-4 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100">💡 컴포넌트 가이드</h2>
        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <li>• <strong>Button</strong>: 클릭 가능한 버튼 컴포넌트</li>
          <li>• <strong>Input</strong>: 텍스트 입력 필드</li>
          <li>• <strong>Select</strong>: 드롭다운 선택 컴포넌트</li>
          <li>• <strong>Checkbox</strong>: 체크박스 입력</li>
          <li>• <strong>Textarea</strong>: 여러 줄의 텍스트 입력</li>
          <li>• <strong>Form</strong>: React Hook Form과의 통합</li>
        </ul>
      </section>
    </div>
  );
}
