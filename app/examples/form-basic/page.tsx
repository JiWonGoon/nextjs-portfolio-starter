'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FormBasicPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('폼 제출:', formData);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <Link href="/examples" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
          ← 뒤로 가기
        </Link>
        <h1 className="text-3xl font-bold">기본 폼</h1>
        <p className="text-slate-600 dark:text-slate-400">
          텍스트 입력, 이메일, 선택 컴포넌트를 사용한 기본 폼 예제입니다.
        </p>
      </div>

      {submitted && (
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ 폼이 제출되었습니다!</h3>
          <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded border border-green-200 dark:border-green-800 overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 text-sm font-medium text-green-900 dark:text-green-100 hover:underline"
          >
            새로 입력하기
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 이름 입력 */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            이름
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
            className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          />
        </div>

        {/* 이메일 입력 */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          />
        </div>

        {/* 카테고리 선택 */}
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium">
            카테고리
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="web">웹 개발</option>
            <option value="design">디자인</option>
            <option value="mobile">모바일 개발</option>
            <option value="other">기타</option>
          </select>
        </div>

        {/* 메시지 입력 */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            메시지
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="메시지를 입력하세요"
            rows={5}
            className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          />
        </div>

        {/* 버튼 */}
        <button
          type="submit"
          className="w-full px-6 py-2 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          제출
        </button>
      </form>

      {/* 코드 예제 */}
      <div className="space-y-3 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
        <h3 className="font-semibold">📝 입력된 값</h3>
        <pre className="text-xs overflow-x-auto text-slate-600 dark:text-slate-400">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
