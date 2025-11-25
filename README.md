## 리커밋 브랜드 웹사이트

기획부터 디자인, 개발, 배포까지 전 과정을 단독으로 수행한 브랜드 웹사이트입니다. 단순한 퍼블리싱 프로젝트가 아니라 실제 운영 중인 서비스이기 때문에, 이미지 자산 관리(S3 + /public 분리), 성능 최적화, 문의 폼 플로우 등 핵심 기능을 운영·유지보수 기준에 맞춰 설계·구현했습니다. 빠르게 운영 가능한 상태를 우선 구축한 뒤, 이후 기능 확장을 고려해 구조를 유연하게 설계했습니다.

https://www.leecommit.kr/





**사용 기술**
*Next.js 16(App Router), React, TypeScript, Styled-components, Swiper, EmailJS, AWS S3, Vercel*


**1. 프로젝트 구조 설계 및 SEO 구성**

- Next.js 16(App Router) + TypeScript 기반으로 프로젝트 구조 설계
- metadata API 기반 SEO·Open Graph 설정 구성
- GitHub–Vercel 연동으로 Preview/Production 자동 배포 환경 구축

**2. 상품 섹션 및 이미지 자산 관리**

- Swiper를 이용하여 상품 캐러셀 UI 구현
- AWS S3에 이미지 자산을 분리하고 WebP 기반으로 최적화
- next/image 적용 및 공통 이미지 컴포넌트(CommonImage) 제작으로 width/height/sizes/quality 설정을 통합해 유지보수성 향상
- 히어로 이미지는 `/public`에서 직접 서빙해 초기 렌더링 안정성 확보

**3. 문의 기능 구현**

- EmailJS SDK 기반 클라이언트 사이드 문의 폼 구현
- Form 유효성 검사, 전송/에러 상태 UI, 자동 새로고침 기능 구성
- 단순 스팸 제출 방지를 위한 기본적인 클라이언트 측 프리벤션 로직 적용

**4. UX 및 인터랙션 개선**

- requestAnimationFrame 기반 `useScrollTop` Hook 구현으로 스크롤 감지 성능 향상
- 헤더 스크롤 애니메이션 최적화
- 반응형 디자인 및 접근성 고려된 인터랙션 구성

**5. 스타일 및 자산 관리**

- Styled-components Theme과 Pretendard 폰트 적용으로 브랜드 스타일 일관성 확보
- SVG 로고를 @svgr/webpack으로 React 컴포넌트화하여 재사용성과 자산 관리 효율성 향상
