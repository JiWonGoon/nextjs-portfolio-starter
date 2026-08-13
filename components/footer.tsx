export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Next.js를 사용한 포트폴리오 스타터킷
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">기술</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li>Next.js 15</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">링크</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">GitHub</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">문서</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; 2024 Portfolio Starter Kit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
