'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DatePage() {
  const [birthDate, setBirthDate] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const calculateAge = (birthDate: string): number | null => {
    if (!birthDate) return null;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const formatDate = (dateStr: string): string => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const calculateDays = (start: string, end: string): number | null => {
    if (!start || !end) return null;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };

  const isDateValid = (dateStr: string): boolean => {
    if (!dateStr) return false;
    const date = new Date(dateStr);
    return date instanceof Date && !isNaN(date.getTime());
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <Link href="/examples" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
          ← 뒤로 가기
        </Link>
        <h1 className="text-4xl font-bold">날짜 입력 예제</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          날짜 입력을 받고 처리하는 다양한 예제입니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* 생년월일 선택 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎂 생년월일</h2>

          <div className="space-y-3">
            <label className="block">
              <span className="block text-sm font-medium mb-2">생년월일을 선택하세요:</span>
              <input
                type="date"
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
                max={today}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
              />
            </label>

            {birthDate && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 space-y-2">
                <p className="font-semibold text-blue-900 dark:text-blue-100">
                  🎉 만 {calculateAge(birthDate)}세입니다!
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  {formatDate(birthDate)}에 태어났습니다.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 이벤트 날짜 선택 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎪 이벤트 날짜</h2>

          <div className="space-y-3">
            <label className="block">
              <span className="block text-sm font-medium mb-2">이벤트 날짜를 선택하세요:</span>
              <input
                type="date"
                value={eventDate}
                onChange={e => setEventDate(e.target.value)}
                min={today}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
              />
            </label>

            {eventDate && (
              <div className="space-y-3">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="font-semibold text-green-900 dark:text-green-100">
                    {formatDate(eventDate)}
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    지금부터 {Math.ceil((new Date(eventDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}일 남았습니다
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 날짜 범위 선택 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📅 날짜 범위 (예: 휴가 기간)</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-sm font-medium mb-2">시작 날짜:</span>
              <input
                type="date"
                value={dateRange.start}
                onChange={e => setDateRange({ ...dateRange, start: e.target.value })}
                max={dateRange.end || undefined}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
              />
            </label>

            <label className="block">
              <span className="block text-sm font-medium mb-2">종료 날짜:</span>
              <input
                type="date"
                value={dateRange.end}
                onChange={e => setDateRange({ ...dateRange, end: e.target.value })}
                min={dateRange.start || undefined}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
              />
            </label>
          </div>

          {dateRange.start && dateRange.end && (
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 space-y-2">
              <p className="font-semibold text-purple-900 dark:text-purple-100">
                {formatDate(dateRange.start)} ~ {formatDate(dateRange.end)}
              </p>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                총 {calculateDays(dateRange.start, dateRange.end)}일입니다 🎉
              </p>
            </div>
          )}
        </section>

        {/* 요약 정보 */}
        <section className="space-y-4 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold">📊 입력된 날짜 정보</h2>

          <div className="space-y-3">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">생년월일</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">
                {birthDate ? formatDate(birthDate) : '선택하지 않음'}
              </p>
              {birthDate && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {calculateAge(birthDate)} 세
                </p>
              )}
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">이벤트 날짜</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">
                {eventDate ? formatDate(eventDate) : '선택하지 않음'}
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">날짜 범위</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">
                {dateRange.start && dateRange.end ? `${calculateDays(dateRange.start, dateRange.end)}일` : '선택하지 않음'}
              </p>
            </div>
          </div>
        </section>

        {/* JSON 데이터 */}
        <section className="space-y-3 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
          <h3 className="font-semibold">💾 JSON 데이터</h3>
          <pre className="text-xs overflow-x-auto text-slate-600 dark:text-slate-400">
            {JSON.stringify({
              birthDate: birthDate || null,
              age: birthDate ? calculateAge(birthDate) : null,
              eventDate: eventDate || null,
              daysUntilEvent: eventDate ? Math.ceil((new Date(eventDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null,
              dateRange: {
                start: dateRange.start || null,
                end: dateRange.end || null,
                totalDays: calculateDays(dateRange.start, dateRange.end)
              }
            }, null, 2)}
          </pre>
        </section>

        {/* 팁 */}
        <section className="space-y-3 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
          <h3 className="font-semibold text-amber-900 dark:text-amber-100">💡 날짜 입력 팁</h3>
          <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-2">
            <li>✓ <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded text-xs">type="date"</code> 형식 사용</li>
            <li>✓ <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded text-xs">min</code>, <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded text-xs">max</code> 속성으로 범위 제한</li>
            <li>✓ 날짜 비교는 ISO 형식(YYYY-MM-DD) 사용</li>
            <li>✓ 유효성 검사는 Zod의 date() 메서드 사용</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
