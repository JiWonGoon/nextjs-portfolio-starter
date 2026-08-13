'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckboxPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);

  const items = [
    { id: 'html', label: 'HTML', description: '웹 마크업 언어' },
    { id: 'css', label: 'CSS', description: '스타일링' },
    { id: 'javascript', label: 'JavaScript', description: '상호작용 스크립트' },
    { id: 'typescript', label: 'TypeScript', description: '타입 안전 스크립트' },
    { id: 'react', label: 'React', description: 'UI 라이브러리' },
    { id: 'nextjs', label: 'Next.js', description: '프레임워크' },
  ];

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id));
    }
  };

  const handleInterestChange = (id: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, id]);
    } else {
      setInterests(interests.filter(item => item !== id));
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <Link href="/examples" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
          ← 뒤로 가기
        </Link>
        <h1 className="text-4xl font-bold">체크박스 예제</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          여러 개의 항목을 동시에 선택할 수 있는 체크박스 예제입니다.
        </p>
      </div>

      <div className="space-y-6">
        {/* 기본 체크박스 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📚 기술 선택</h2>
          <p className="text-slate-600 dark:text-slate-400">알고 있는 기술을 모두 선택하세요:</p>

          <div className="space-y-3 p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            {items.map(item => (
              <label
                key={item.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={e => handleCheckboxChange(item.id, e.target.checked)}
                  className="w-5 h-5 mt-0.5 accent-slate-900 dark:accent-slate-50 rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{item.label}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </label>
            ))}
          </div>

          {selectedItems.length > 0 && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">선택된 기술:</p>
              <div className="flex flex-wrap gap-2">
                {selectedItems.map(id => {
                  const item = items.find(i => i.id === id);
                  return (
                    <span key={id} className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
                      {item?.label}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* 관심사 선택 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❤️ 관심사 선택</h2>
          <p className="text-slate-600 dark:text-slate-400">당신의 관심사를 선택해주세요:</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['웹 개발', '모바일 개발', 'UI/UX 디자인', 'DevOps', '데이터 분석', 'AI/ML'].map(interest => (
              <label
                key={interest}
                className="flex items-center space-x-3 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <input
                  type="checkbox"
                  checked={interests.includes(interest)}
                  onChange={e => handleInterestChange(interest, e.target.checked)}
                  className="w-5 h-5 accent-slate-900 dark:accent-slate-50 rounded"
                />
                <span className="font-medium">{interest}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 요약 */}
        <section className="space-y-4 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold">📊 선택 요약</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">선택된 기술 ({selectedItems.length})</h3>
              {selectedItems.length > 0 ? (
                <ul className="space-y-2">
                  {selectedItems.map(id => (
                    <li key={id} className="text-slate-700 dark:text-slate-300">
                      ✓ {items.find(i => i.id === id)?.label}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600 dark:text-slate-400 text-sm">선택된 기술이 없습니다</p>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">선택된 관심사 ({interests.length})</h3>
              {interests.length > 0 ? (
                <ul className="space-y-2">
                  {interests.map(interest => (
                    <li key={interest} className="text-slate-700 dark:text-slate-300">
                      ♥ {interest}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600 dark:text-slate-400 text-sm">선택된 관심사가 없습니다</p>
              )}
            </div>
          </div>
        </section>

        {/* 코드 예제 */}
        <section className="space-y-3 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
          <h3 className="font-semibold">💻 JSON 데이터</h3>
          <pre className="text-xs overflow-x-auto text-slate-600 dark:text-slate-400">
            {JSON.stringify({
              selectedTechnologies: selectedItems,
              interests: interests,
              totalSelected: selectedItems.length + interests.length
            }, null, 2)}
          </pre>
        </section>
      </div>
    </div>
  );
}
