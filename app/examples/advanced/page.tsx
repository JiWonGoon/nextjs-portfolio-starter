'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  responsibility: string;
}

export default function AdvancedPage() {
  const [experience, setExperience] = useState<FormData>({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    skills: [],
    responsibility: '',
  });

  const [experiences, setExperiences] = useState<FormData[]>([]);

  // 폼 단계를 상수로 정의하여 매직 스트링 제거
  const STEPS = {
    BASIC: 'basic',
    SKILLS: 'skills',
    DESCRIPTION: 'description',
    REVIEW: 'review',
  } as const;

  type StepType = typeof STEPS[keyof typeof STEPS];
  const [currentStep, setCurrentStep] = useState<StepType>(STEPS.BASIC);

  const skillOptions = [
    'React', 'Vue.js', 'Angular',
    'Node.js', 'Python', 'Java',
    'TypeScript', 'JavaScript', 'Go',
    'PostgreSQL', 'MongoDB', 'Redis'
  ];

  const handleBasicChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExperience(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setExperience(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setExperience(prev => ({ ...prev, [name]: value }));
  };

  const addExperience = () => {
    if (experience.company && experience.position && experience.startDate) {
      setExperiences([...experiences, experience]);
      setExperience({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        skills: [],
        responsibility: '',
      });
      setCurrentStep(STEPS.BASIC);
    }
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const isStepComplete = (): boolean => {
    switch (currentStep) {
      case STEPS.BASIC:
        return !!(experience.company && experience.position && experience.startDate);
      case STEPS.SKILLS:
        return experience.skills.length > 0;
      case STEPS.DESCRIPTION:
        return !!(experience.description && experience.responsibility);
      case STEPS.REVIEW:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <Link href="/examples" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
          ← 뒤로 가기
        </Link>
        <h1 className="text-4xl font-bold">고급 폼 예제</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          단계별 폼으로 경력사항을 입력하는 고급 예제입니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* 스텝 표시 */}
        <div className="flex items-center justify-between gap-2">
          {[
            { step: STEPS.BASIC, label: '기본 정보', icon: '📋' },
            { step: STEPS.SKILLS, label: '기술 스택', icon: '⚙️' },
            { step: STEPS.DESCRIPTION, label: '상세 정보', icon: '📝' },
            { step: STEPS.REVIEW, label: '검토', icon: '✅' },
          ].map((item, idx, arr) => (
            <div key={item.step} className="flex items-center flex-1">
              <button
                onClick={() => setCurrentStep(item.step as StepType)}
                className={`flex flex-col items-center flex-1 py-3 px-2 rounded-lg transition-all ${
                  currentStep === item.step
                    ? 'bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-semibold mt-1 text-center">{item.label}</span>
              </button>
              {idx < arr.length - 1 && (
                <div className="h-0.5 flex-1 mx-1 bg-slate-300 dark:bg-slate-700"></div>
              )}
            </div>
          ))}
        </div>

        {/* 스텝 1: 기본 정보 */}
        {currentStep === STEPS.BASIC && (
          <div className="space-y-4 p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold">기본 정보</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">회사명 *</label>
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={handleBasicChange}
                  placeholder="예: Google"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">직책 *</label>
                <input
                  type="text"
                  name="position"
                  value={experience.position}
                  onChange={handleBasicChange}
                  placeholder="예: Senior Developer"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">시작 날짜 *</label>
                <input
                  type="date"
                  name="startDate"
                  value={experience.startDate}
                  onChange={handleBasicChange}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">종료 날짜</label>
                <input
                  type="date"
                  name="endDate"
                  value={experience.endDate}
                  onChange={handleBasicChange}
                  min={experience.startDate}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                />
              </div>
            </div>

            <button
              onClick={() => isStepComplete() && setCurrentStep('skills')}
              disabled={!isStepComplete()}
              className={`w-full py-2 rounded-lg font-medium transition-all ${
                isStepComplete()
                  ? 'bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 hover:opacity-90'
                  : 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed'
              }`}
            >
              다음 단계: 기술 스택
            </button>
          </div>
        )}

        {/* 스텝 2: 기술 스택 */}
        {currentStep === STEPS.SKILLS && (
          <div className="space-y-4 p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold">기술 스택</h2>
            <p className="text-slate-600 dark:text-slate-400">이 직책에서 사용한 기술을 선택하세요:</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skillOptions.map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`p-3 rounded-lg font-medium transition-all border-2 ${
                    experience.skills.includes(skill)
                      ? 'border-slate-900 dark:border-slate-50 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900'
                      : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 hover:border-slate-400 dark:hover:border-slate-500'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentStep('basic')}
                className="flex-1 py-2 rounded-lg font-medium bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-50 hover:opacity-80"
              >
                이전
              </button>
              <button
                onClick={() => isStepComplete() && setCurrentStep('description')}
                disabled={!isStepComplete()}
                className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                  isStepComplete()
                    ? 'bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 hover:opacity-90'
                    : 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                }`}
              >
                다음 단계: 상세 정보
              </button>
            </div>
          </div>
        )}

        {/* 스텝 3: 상세 정보 */}
        {currentStep === STEPS.DESCRIPTION && (
          <div className="space-y-4 p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold">상세 정보</h2>

            <div className="space-y-2">
              <label className="block text-sm font-medium">업무 설명 *</label>
              <textarea
                name="description"
                value={experience.description}
                onChange={handleDescriptionChange}
                placeholder="이 직책에서 담당한 업무를 설명하세요"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">주요 성과 *</label>
              <textarea
                name="responsibility"
                value={experience.responsibility}
                onChange={handleDescriptionChange}
                placeholder="주요 성과와 책임을 입력하세요"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentStep(STEPS.SKILLS)}
                className="flex-1 py-2 rounded-lg font-medium bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-50 hover:opacity-80"
              >
                이전
              </button>
              <button
                onClick={() => isStepComplete() && setCurrentStep(STEPS.REVIEW)}
                disabled={!isStepComplete()}
                className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                  isStepComplete()
                    ? 'bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 hover:opacity-90'
                    : 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                }`}
              >
                다음 단계: 검토
              </button>
            </div>
          </div>
        )}

        {/* 스텝 4: 검토 및 제출 */}
        {currentStep === STEPS.REVIEW && (
          <div className="space-y-4 p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold">입력 정보 검토</h2>

            <div className="space-y-4 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">회사명</p>
                <p className="font-semibold text-lg">{experience.company}</p>
              </div>

              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">직책</p>
                <p className="font-semibold text-lg">{experience.position}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">시작 날짜</p>
                  <p className="font-semibold">{experience.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">종료 날짜</p>
                  <p className="font-semibold">{experience.endDate || '현재'}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">기술 스택</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">업무 설명</p>
                <p className="mt-2 text-slate-900 dark:text-slate-50 whitespace-pre-wrap">{experience.description}</p>
              </div>

              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">주요 성과</p>
                <p className="mt-2 text-slate-900 dark:text-slate-50 whitespace-pre-wrap">{experience.responsibility}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentStep(STEPS.DESCRIPTION)}
                className="flex-1 py-2 rounded-lg font-medium bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-50 hover:opacity-80"
              >
                이전
              </button>
              <button
                onClick={addExperience}
                className="flex-1 py-2 rounded-lg font-medium bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 hover:opacity-90"
              >
                추가
              </button>
            </div>
          </div>
        )}

        {/* 추가된 경력 목록 */}
        {experiences.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">📋 추가된 경력</h2>

            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold">{exp.company}</p>
                    <p className="text-lg text-slate-600 dark:text-slate-400">{exp.position}</p>
                  </div>
                  <button
                    onClick={() => removeExperience(idx)}
                    className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg text-sm font-medium hover:opacity-80"
                  >
                    삭제
                  </button>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {exp.startDate} ~ {exp.endDate || '현재'}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-2">{exp.description}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{exp.responsibility}</p>
              </div>
            ))}
          </div>
        )}

        {/* JSON 내보내기 */}
        {experiences.length > 0 && (
          <section className="space-y-3 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold">💾 JSON 형식으로 내보내기</h3>
            <pre className="text-xs overflow-x-auto text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 p-4 rounded">
              {JSON.stringify(experiences, null, 2)}
            </pre>
          </section>
        )}
      </div>
    </div>
  );
}
