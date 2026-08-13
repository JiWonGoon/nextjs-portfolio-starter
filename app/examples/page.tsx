import Link from 'next/link';

export default function ExamplesPage() {
  const examples = [
    {
      title: '기본 폼',
      description: '텍스트 입력, 이메일, 카테고리 선택, 텍스트 영역을 포함한 기본 폼 예제입니다.',
      href: '/examples/form-basic',
      icon: '📋',
      features: ['텍스트 입력', '이메일', '선택 드롭다운', '텍스트 영역']
    },
    {
      title: '검증 폼',
      description: 'Zod 스키마와 React Hook Form을 사용한 검증 기능이 있는 폼입니다. 실시간 에러 메시지를 확인할 수 있습니다.',
      href: '/examples/form-validation',
      icon: '✅',
      features: ['입력 검증', '에러 메시지', '폼 제출', '약관 동의']
    },
    {
      title: '체크박스 예제',
      description: '여러 개의 체크박스 옵션을 선택할 수 있는 예제입니다.',
      href: '/examples/checkbox',
      icon: '☑️',
      features: ['다중 선택', '상태 관리', '선택된 항목 표시']
    },
    {
      title: '라디오 버튼 예제',
      description: '라디오 버튼으로 하나의 옵션만 선택할 수 있는 예제입니다.',
      href: '/examples/radio',
      icon: '◉',
      features: ['단일 선택', '옵션 그룹', '상태 표시']
    },
    {
      title: '날짜 입력 예제',
      description: '날짜를 입력받는 폼 예제입니다. 날짜 형식 검증이 포함되어 있습니다.',
      href: '/examples/date',
      icon: '📅',
      features: ['날짜 입력', '형식 검증', '범위 제한']
    },
    {
      title: '고급 폼',
      description: '여러 섹션으로 나뉜 복잡한 폼 예제입니다. 단계별 폼 작성을 보여줍니다.',
      href: '/examples/advanced',
      icon: '🎯',
      features: ['다단계 폼', '섹션 구분', '전체 검증']
    },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">폼 예제</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          다양한 폼 컴포넌트와 검증 방식을 보여주는 예제들입니다.
          각 예제를 클릭해서 직접 사용해보세요.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map(example => (
          <Link
            key={example.href}
            href={example.href}
            className="group p-8 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all bg-white dark:bg-slate-900/50"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{example.icon}</div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{example.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">{example.description}</p>

            <div className="space-y-3 mb-6">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">포함 기능</p>
              <div className="flex flex-wrap gap-2">
                {example.features.map(feature => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center text-base font-semibold text-slate-900 dark:text-slate-50 group-hover:translate-x-2 transition-transform">
              자세히 보기
              <span className="ml-2">→</span>
            </div>
          </Link>
        ))}
      </section>

      {/* 빠른 시작 가이드 */}
      <section className="space-y-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-2 border-blue-200 dark:border-blue-800">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">🚀 폼 컴포넌트 사용 방법</h2>
          <p className="text-blue-800 dark:text-blue-200">각 예제에서 다양한 폼 패턴을 학습하고 프로젝트에 적용할 수 있습니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
              <span className="text-lg mr-2">📝</span> 기본 폼 사용
            </h3>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>✓ 상태 관리 (useState)</li>
              <li>✓ 이벤트 핸들링</li>
              <li>✓ 폼 제출 처리</li>
              <li>✓ 기본 검증</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
              <span className="text-lg mr-2">✅</span> 고급 검증
            </h3>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>✓ React Hook Form</li>
              <li>✓ Zod 스키마 검증</li>
              <li>✓ 실시간 에러 메시지</li>
              <li>✓ 복잡한 검증 규칙</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
          <p className="text-xs text-blue-800 dark:text-blue-200">
            💡 <strong>팁:</strong> 각 예제의 소스 코드를 참고하여 자신의 프로젝트에 맞게 수정해서 사용하세요.
            모든 예제는 복사해서 바로 사용할 수 있도록 작성되어 있습니다.
          </p>
        </div>
      </section>

      {/* 컴포넌트 레퍼런스 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">📚 컴포넌트 레퍼런스</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-lg mb-3">입력 컴포넌트</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li><code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-xs">Input</code> - 텍스트 입력 필드</li>
              <li><code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-xs">Textarea</code> - 여러 줄 텍스트</li>
              <li><code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-xs">Select</code> - 드롭다운 선택</li>
              <li><code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-xs">Checkbox</code> - 다중 선택</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-lg mb-3">추가 컴포넌트</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li><code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-xs">RadioGroup</code> - 단일 선택</li>
              <li><code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-xs">Button</code> - 액션 버튼</li>
              <li><code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-xs">Form</code> - 폼 래퍼</li>
              <li><code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-xs">Label</code> - 레이블</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
