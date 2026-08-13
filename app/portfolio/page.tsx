import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="space-y-12 max-w-4xl">
      {/* 소개 섹션 */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">안녕하세요</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
          저는 웹 개발자입니다. 이 페이지는 포트폴리오 템플릿입니다.
          자신의 정보와 프로젝트로 커스터마이즈하여 사용하세요.
        </p>
      </section>

      {/* 프로젝트 섹션 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: '프로젝트 1',
              description: '첫 번째 프로젝트에 대한 설명을 작성하세요.',
              tags: ['Next.js', 'TypeScript', 'Tailwind'],
            },
            {
              title: '프로젝트 2',
              description: '두 번째 프로젝트에 대한 설명을 작성하세요.',
              tags: ['React', 'Node.js', 'MongoDB'],
            },
            {
              title: '프로젝트 3',
              description: '세 번째 프로젝트에 대한 설명을 작성하세요.',
              tags: ['Vue.js', 'Firebase', 'Tailwind'],
            },
            {
              title: '프로젝트 4',
              description: '네 번째 프로젝트에 대한 설명을 작성하세요.',
              tags: ['Django', 'PostgreSQL', 'Docker'],
            },
          ].map(project => (
            <div
              key={project.title}
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">기술 스택</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Frontend</h3>
            <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
              <li>• React / Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• React Hook Form</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Backend</h3>
            <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
              <li>• Node.js / Express</li>
              <li>• Python / Django</li>
              <li>• PostgreSQL / MongoDB</li>
              <li>• REST API</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Tools</h3>
            <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
              <li>• Git / GitHub</li>
              <li>• Docker</li>
              <li>• Vercel / AWS</li>
              <li>• Figma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 경력 섹션 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">경력</h2>
        <div className="space-y-6">
          {[
            {
              title: '회사명 / 직책',
              period: '2023 - 현재',
              description: '경력 내용을 작성하세요.',
            },
            {
              title: '이전 회사 / 직책',
              period: '2022 - 2023',
              description: '이전 경력 내용을 작성하세요.',
            },
          ].map((career, idx) => (
            <div key={idx} className="border-l-2 border-slate-300 dark:border-slate-700 pl-6 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{career.title}</h3>
                <span className="text-sm text-slate-600 dark:text-slate-400">{career.period}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">{career.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section className="space-y-6 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold">연락처</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">Email</p>
            <a href="mailto:your@email.com" className="text-lg font-medium hover:underline">
              your@email.com
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">GitHub</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
              github.com/username
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">LinkedIn</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
              linkedin.com/in/username
            </a>
          </div>
        </div>
      </section>

      {/* 돌아가기 */}
      <div className="pt-6 text-center">
        <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
          ← 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
