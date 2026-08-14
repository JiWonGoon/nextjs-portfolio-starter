# 포트폴리오 스타터킷

Next.js 15, TypeScript, Tailwind CSS를 사용한 포트폴리오 프로젝트를 빠르게 시작할 수 있는 스타터킷입니다.

## ✨ 주요 기능

- **🎨 다크모드**: `next-themes`를 사용한 라이트/다크 테마 전환
- **📱 반응형 디자인**: Tailwind CSS를 사용한 완벽한 모바일 대응
- **📝 폼 컴포넌트**: React Hook Form과 Zod를 사용한 타입 안전한 폼
- **⚡ 최신 기술**: Next.js 15, TypeScript, 최신 웹 표준

## 🛠️ 기술 스택

| 분야 | 도구 |
|------|------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Zod |
| Dark Mode | next-themes |
| Package Manager | npm |

## 🚀 라이브 데모

https://nextjs-portfolio-starter.vercel.app

## 📦 설치 및 실행

### 1. 프로젝트 클론

```bash
git clone https://github.com/JiWonGoon/nextjs-portfolio-starter.git
cd nextjs-portfolio-starter
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어보세요.

### 4. 빌드

```bash
npm run build
npm run start
```

## 📁 프로젝트 구조

```
app/
├── layout.tsx              # 루트 레이아웃 (다크모드, Navbar, Footer)
├── page.tsx                # 홈페이지
├── portfolio/
│   └── page.tsx            # 포트폴리오 템플릿
└── examples/
    ├── page.tsx            # 예제 목록
    ├── form-basic/
    │   └── page.tsx        # 기본 폼 예제
    └── form-validation/
        └── page.tsx        # 검증 폼 예제
components/
├── navbar.tsx              # 네비게이션 바
├── footer.tsx              # 푸터
└── theme-toggle.tsx        # 다크모드 토글
```

## 🚀 빠르게 시작하기

1. **홈페이지 커스터마이징**: `app/page.tsx`를 수정하세요
2. **포트폴리오 작성**: `app/portfolio/page.tsx`에 자신의 정보를 추가하세요
3. **네비게이션 수정**: `components/navbar.tsx`의 링크를 원하는 대로 변경하세요
4. **색상 테마 변경**: `app/layout.tsx`의 Tailwind 색상 클래스를 수정하세요

더 자세한 정보는 [GETTING_STARTED.md](./GETTING_STARTED.md)를 참고하세요.

## 🎨 Tailwind CSS 색상

기본적으로 `slate` 색상을 사용하고 있습니다. 다른 색상으로 변경하려면:

```tsx
// 예: blue 색상으로 변경
className="text-blue-600 dark:text-blue-400"
```

사용 가능한 색상: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, blue, indigo, violet, purple, fuchsia, pink, rose

## 📚 주요 파일 수정 가이드

### 사이트 메타데이터 변경
**파일**: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My portfolio website",
};
```

### 네비게이션 링크 변경
**파일**: `components/navbar.tsx`

```tsx
<Link href="/your-page" className="...">
  내 페이지
</Link>
```

### 홈페이지 콘텐츠 수정
**파일**: `app/page.tsx`

여기서 홈페이지의 모든 내용을 수정할 수 있습니다.

## 🔧 커스터마이징

### 폰트 변경
`app/layout.tsx`에서 Google Fonts를 변경하세요:

```tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

### 색상 테마 변경
`tailwind.config.ts`를 수정하여 기본 색상을 변경할 수 있습니다.

### 글로벌 스타일 수정
`app/globals.css`에서 CSS 변수와 전역 스타일을 수정하세요.

## 🚢 배포

### ✨ Vercel에 배포 (가장 쉬움, 권장)

1. [Vercel](https://vercel.com)에 접속
2. **"Add New..."** → **"Project"** 클릭
3. GitHub에서 이 저장소 선택
4. **Deploy** 클릭 (설정 자동)

배포 완료 후 자동으로 URL이 생성됩니다!

**특징:**
- ✅ 한 번의 클릭으로 배포
- ✅ 자동 빌드 및 배포
- ✅ GitHub 푸시 시 자동 갱신
- ✅ 무료 호스팅

### 다른 플랫폼에 배포

```bash
npm run build
npm run start
```

- **Netlify**: 위와 동일하게 GitHub 연결
- **GitHub Pages**: static export 필요
- **AWS Amplify**: Amplify Console에서 설정
- **Firebase Hosting**: Firebase CLI 사용

## 📖 유용한 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod 문서](https://zod.dev/)

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🤝 기여

이 스타터킷을 개선하는 데 도움을 주고 싶다면 Pull Request를 보내주세요!

---

질문이나 문제가 있으면 이슈를 등록해주세요!
