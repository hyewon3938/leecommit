import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }


@font-face {
    font-family: 'DosGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff') format('woff');
    font-weight: normal;
    font-display: swap;
}

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Pretendard Variable', Pretendard, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
  }


  /* 모든 기본 여백 제거 */
  body, h1, h2, h3, h4, h5, h6, p, ul, ol, figure, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  /* 리스트 스타일 제거 */
  ul, ol {
    list-style: none;
  }

  /* 링크 스타일 초기화 */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 버튼/인풋 등 폼 요소 초기화 */
  button, input, textarea, select {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
  }

  /* 이미지 블록화 + 드래그 방지 기본값 */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* address 기본 이탤릭 제거 */
  address {
    font-style: normal;
  }

  /* strong, b 등의 두께 통일 */
  b, strong {
    font-weight: 600;
  }

  /* quote 관련 기본 인용 기호 제거 */
  blockquote, q {
    quotes: none;
  }
  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  /* 테이블 관련 리셋 */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 스크롤바 스타일 커스터마이즈 (선택) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  address {
    font-style: normal;
  }

  section {
    scroll-margin-top: 70px;
    @media (max-width: 768px) {

      scroll-margin-top: 96px;

    }
  }

`;

export default GlobalStyle;
