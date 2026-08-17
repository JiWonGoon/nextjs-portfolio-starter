'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { useState } from 'react';

// Zod 스키마 정의
const contactSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다'),
  email: z.string().email('유효한 이메일 주소를 입력하세요'),
  phone: z.string().regex(/^\d{10,11}$/, '유효한 전화번호를 입력하세요 (하이픈 제외)'),
  category: z.string().min(1, '카테고리를 선택하세요'),
  agree: z.boolean().refine(val => val === true, {
    message: '약관에 동의해야 합니다',
  }),
  message: z.string().min(10, '메시지는 10자 이상이어야 합니다'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function FormValidationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitData, setSubmitData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // DEBUG 모드에서만 로그 출력 (프로덕션에서는 표시 안됨)
    if (process.env.NEXT_PUBLIC_DEBUG) {
      console.log('검증된 폼 데이터:', data);
    }
    setSubmitData(data);
    setSubmitted(true);
  };

  // className 반복을 제거하기 위한 헬퍼 함수
  // 입력 필드의 스타일을 일관되게 적용하고 에러 상태를 처리합니다
  const getInputClasses = (hasError: boolean): string => `
    w-full px-4 py-2 rounded-md border
    ${hasError
      ? 'border-red-500 dark:border-red-500'
      : 'border-slate-300 dark:border-slate-600'}
    bg-white dark:bg-slate-900
    text-slate-900 dark:text-slate-50
    placeholder-slate-500 dark:placeholder-slate-400
    focus:outline-none focus:ring-2
    ${hasError
      ? 'focus:ring-red-500'
      : 'focus:ring-slate-400 dark:focus:ring-slate-600'}
  `.trim();

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <Link href="/examples" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
          ← 뒤로 가기
        </Link>
        <h1 className="text-3xl font-bold">검증 폼</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Zod와 React Hook Form을 사용한 검증 기능이 있는 폼입니다. 각 필드의 검증 규칙을 확인해보세요.
        </p>
      </div>

      {submitted && submitData && (
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ 폼이 성공적으로 제출되었습니다!</h3>
          <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded border border-green-200 dark:border-green-800 overflow-x-auto mb-3">
            {JSON.stringify(submitData, null, 2)}
          </pre>
          <button
            onClick={() => {
              setSubmitted(false);
              setSubmitData(null);
              reset();
            }}
            className="text-sm font-medium text-green-900 dark:text-green-100 hover:underline"
          >
            새로 입력하기
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 이름 */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            이름 *
          </label>
          <input
            id="name"
            type="text"
            placeholder="2자 이상 입력하세요"
            className={getInputClasses(!!errors.name)}
            {...register('name')}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* 이메일 */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            이메일 *
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            className={getInputClasses(!!errors.email)}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* 전화번호 */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            전화번호 * (하이픈 제외)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="01012345678"
            className={getInputClasses(!!errors.phone)}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* 카테고리 */}
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium">
            카테고리 *
          </label>
          <select
            id="category"
            className={getInputClasses(!!errors.category)}
            {...register('category')}
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="web">웹 개발</option>
            <option value="design">디자인</option>
            <option value="mobile">모바일 개발</option>
          </select>
          {errors.category && (
            <p className="text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>

        {/* 메시지 */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            메시지 * (10자 이상)
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="10자 이상의 메시지를 입력하세요"
            className={getInputClasses(!!errors.message)}
            {...register('message')}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* 약관 동의 */}
        <div className="flex items-start space-x-2">
          <input
            id="agree"
            type="checkbox"
            className={`mt-1 w-4 h-4 rounded border ${
              errors.agree
                ? 'border-red-500 dark:border-red-500'
                : 'border-slate-300 dark:border-slate-600'
            } accent-slate-900 dark:accent-slate-50`}
            {...register('agree')}
          />
          <label htmlFor="agree" className="text-sm">
            약관에 동의합니다 *
          </label>
          {errors.agree && (
            <p className="text-sm text-red-500">{errors.agree.message}</p>
          )}
        </div>

        {/* 버튼 */}
        <button
          type="submit"
          className="w-full px-6 py-2 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          제출
        </button>
      </form>

      {/* 검증 규칙 */}
      <div className="space-y-3 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100">✅ 검증 규칙</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• 이름: 2자 이상</li>
          <li>• 이메일: 유효한 이메일 형식</li>
          <li>• 전화번호: 10-11자리 숫자</li>
          <li>• 카테고리: 필수 선택</li>
          <li>• 메시지: 10자 이상</li>
          <li>• 약관동의: 필수 체크</li>
        </ul>
      </div>
    </div>
  );
}
