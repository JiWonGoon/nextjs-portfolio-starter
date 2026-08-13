# 시작하기

이 가이드는 포트폴리오 스타터킷을 사용하여 빠르게 프로젝트를 시작하는 방법을 설명합니다.

## 🎯 5분 안에 시작하기

### 1단계: 프로젝트 설정

```bash
# 이 저장소를 포크하고 클론
git clone https://github.com/YOUR_USERNAME/claude-nextjs-starters3.git
cd claude-nextjs-starters3

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

http://localhost:3000 을 브라우저에서 열면 프로젝트가 실행됩니다.

### 2단계: 홈페이지 커스터마이징

`app/page.tsx` 파일을 열고 내용을 수정하세요:

```tsx
// 기본적인 구조
<h1 className="text-5xl font-bold">
  당신의 이름 또는 프로젝트 이름
</h1>
<p className="text-lg text-slate-600 dark:text-slate-400">
  당신에 대한 설명
</p>
```

### 3단계: 포트폴리오 페이지 작성

`app/portfolio/page.tsx` 파일에서:

- 자신의 프로젝트 정보 추가
- 기술 스택 업데이트
- 경력 정보 입력
- 연락처 수정

### 4단계: 네비게이션 수정

`components/navbar.tsx`에서 링크를 변경하세요:

```tsx
<Link href="/your-custom-page" className="...">
  내 페이지
</Link>
```

## 📝 주요 파일 설명

### `app/layout.tsx`
- 전체 사이트의 기본 레이아웃
- 다크모드 설정 (next-themes)
- Navbar와 Footer 포함

### `app/page.tsx`
- 홈페이지
- 가장 먼저 수정해야 할 파일

### `app/portfolio/page.tsx`
- 포트폴리오 페이지 템플릿
- 프로젝트, 경력, 기술 스택 표시

### `app/examples/`
폼 예제들이 포함되어 있습니다:
- `form-basic/page.tsx`: 기본 폼 예제
- `form-validation/page.tsx`: 검증 폼 예제

### `components/`
재사용 가능한 컴포넌트:
- `navbar.tsx`: 상단 네비게이션
- `footer.tsx`: 하단 푸터
- `theme-toggle.tsx`: 다크모드 토글 버튼

## 🎨 스타일링 팁

### 다크모드 지원
모든 색상에 `dark:` 접두사를 붙이면 다크모드에서도 적용됩니다:

```tsx
className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50"
```

### 반응형 디자인
Tailwind의 반응형 클래스를 사용하세요:

```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

- `md`: 태블릿 이상 (768px)
- `lg`: 데스크톱 이상 (1024px)
- `xl`: 큰 화면 (1280px)

### 호버 효과
```tsx
className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
```

## 📋 폼 사용하기

### 기본 폼 (React Hook Form 없음)

```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
};

return (
  <form onSubmit={handleSubmit}>
    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
    />
    <button type="submit">제출</button>
  </form>
);
```

### React Hook Form + Zod

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 검증 스키마 정의
const schema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요'),
  name: z.string().min(2, '2자 이상이어야 합니다'),
});

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
      
      <button type="submit">제출</button>
    </form>
  );
}
```

## 📚 페이지 추가하기

새로운 페이지를 추가하려면:

```bash
# 새 폴더 생성
mkdir app/my-page

# 새 파일 생성
touch app/my-page/page.tsx
```

`app/my-page/page.tsx` 작성:

```tsx
export default function MyPage() {
  return (
    <div>
      <h1>내 페이지</h1>
      {/* 내용 */}
    </div>
  );
}
```

## 🔗 링크 추가하기

네비게이션에 새 링크 추가:

```tsx
// components/navbar.tsx에서
<Link href="/my-page" className="...">
  내 페이지
</Link>
```

## 🎯 프로젝트 배포

### GitHub에 푸시

```bash
git add .
git commit -m "초기 포트폴리오 설정"
git push origin main
```

### Vercel에 배포

1. [Vercel](https://vercel.com)에 가입
2. GitHub 계정 연결
3. 저장소 선택
4. 자동 배포 시작

자세한 내용은 [README.md](./README.md)의 배포 섹션을 참고하세요.

## 🐛 자주 발생하는 문제

### 다크모드가 작동하지 않음

`app/layout.tsx`에서 `suppressHydrationWarning` 속성이 있는지 확인하세요:

```tsx
<html suppressHydrationWarning>
```

### 스타일이 적용되지 않음

`tailwind.config.ts`에서 content 경로를 확인하세요.

### 폼 검증이 작동하지 않음

`@hookform/resolvers` 패키지가 설치되었는지 확인하세요:

```bash
npm install @hookform/resolvers
```

## 📖 다음 단계

1. **로고/이미지 추가**: `public` 폴더에 이미지 추가
2. **페이지 최적화**: 이미지는 `next/image` 사용
3. **SEO 최적화**: 각 페이지의 메타데이터 설정
4. **분석 도구 추가**: Google Analytics, Vercel Analytics 등
5. **API 추가**: 필요시 `app/api` 디렉토리에 추가

## 💡 팁

- **코드 포매팅**: `npm run lint` 실행
- **타입 체크**: `npx tsc --noEmit` 실행
- **빌드 테스트**: `npm run build` 후 `npm run start`
- **성능 최적화**: Next.js 공식 문서의 최적화 가이드 참고

## 🆘 도움말

- 문제가 발생했나요? GitHub 이슈 등록
- 기능 제안? Pull Request 제출
- 더 알고 싶나요? [Next.js 문서](https://nextjs.org/docs) 참고

---

행운을 빕니다! 🚀
