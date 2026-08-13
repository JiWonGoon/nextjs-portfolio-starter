'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RadioPage() {
  const [experience, setExperience] = useState<string>('');
  const [preference, setPreference] = useState<string>('');

  const experienceLevels = [
    { value: 'beginner', label: '초급', description: '1년 미만의 경험' },
    { value: 'intermediate', label: '중급', description: '1-3년의 경험' },
    { value: 'advanced', label: '고급', description: '3-5년의 경험' },
    { value: 'expert', label: '전문가', description: '5년 이상의 경험' },
  ];

  const workPreferences = [
    { value: 'remote', label: '원격 근무', emoji: '🏠' },
    { value: 'office', label: '사무실 근무', emoji: '🏢' },
    { value: 'hybrid', label: '하이브리드', emoji: '🔄' },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <Link href="/examples" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
          ← 뒤로 가기
        </Link>
        <h1 className="text-4xl font-bold">라디오 버튼 예제</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 예제입니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* 경험 수준 선택 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">👨‍💻 경험 수준 선택</h2>
          <p className="text-slate-600 dark:text-slate-400">당신의 경험 수준을 선택하세요:</p>

          <div className="space-y-3">
            {experienceLevels.map(level => (
              <label
                key={level.value}
                className={`flex items-start space-x-4 p-5 rounded-lg cursor-pointer transition-all border-2 ${
                  experience === level.value
                    ? 'border-slate-400 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="experience"
                  value={level.value}
                  checked={experience === level.value}
                  onChange={e => setExperience(e.target.value)}
                  className="w-5 h-5 mt-1 accent-slate-900 dark:accent-slate-50"
                />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 dark:text-slate-50 text-lg">{level.label}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{level.description}</p>
                </div>
              </label>
            ))}
          </div>

          {experience && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="font-semibold text-green-900 dark:text-green-100">
                선택됨: {experienceLevels.find(e => e.value === experience)?.label}
              </p>
            </div>
          )}
        </section>

        {/* 근무 형태 선택 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🏢 선호하는 근무 형태</h2>
          <p className="text-slate-600 dark:text-slate-400">당신이 선호하는 근무 형태를 선택하세요:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workPreferences.map(pref => (
              <label
                key={pref.value}
                className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-all border-2 space-y-3 ${
                  preference === pref.value
                    ? 'border-slate-400 dark:border-slate-600 bg-slate-100 dark:bg-slate-800'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="preference"
                  value={pref.value}
                  checked={preference === pref.value}
                  onChange={e => setPreference(e.target.value)}
                  className="w-5 h-5 accent-slate-900 dark:accent-slate-50"
                />
                <span className="text-4xl">{pref.emoji}</span>
                <p className="font-semibold text-center">{pref.label}</p>
              </label>
            ))}
          </div>

          {preference && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                선택됨: {workPreferences.find(p => p.value === preference)?.label}
              </p>
            </div>
          )}
        </section>

        {/* 종합 정보 */}
        <section className="space-y-4 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold">📋 선택 정보</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg">
              <span className="font-medium">경험 수준</span>
              <span className="text-slate-600 dark:text-slate-400">
                {experience ? experienceLevels.find(e => e.value === experience)?.label : '선택하지 않음'}
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg">
              <span className="font-medium">근무 형태</span>
              <span className="text-slate-600 dark:text-slate-400">
                {preference ? workPreferences.find(p => p.value === preference)?.label : '선택하지 않음'}
              </span>
            </div>
          </div>
        </section>

        {/* JSON 데이터 */}
        <section className="space-y-3 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
          <h3 className="font-semibold">💾 선택 데이터 (JSON)</h3>
          <pre className="text-xs overflow-x-auto text-slate-600 dark:text-slate-400">
            {JSON.stringify({
              experienceLevel: experience || null,
              workPreference: preference || null,
              completed: !!(experience && preference)
            }, null, 2)}
          </pre>
        </section>

        {/* 팁 */}
        <section className="space-y-3 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
          <h3 className="font-semibold text-amber-900 dark:text-amber-100">💡 라디오 버튼 사용 시기</h3>
          <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-2">
            <li>✓ 상호 배타적인 선택지가 필요한 경우 (하나만 선택 가능)</li>
            <li>✓ 선택지가 3-6개 정도로 적당할 때</li>
            <li>✓ 모든 선택지를 한눈에 보여주고 싶을 때</li>
            <li>✗ 선택지가 너무 많을 때 (드롭다운 사용)</li>
            <li>✗ 여러 개를 동시에 선택해야 할 때 (체크박스 사용)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
