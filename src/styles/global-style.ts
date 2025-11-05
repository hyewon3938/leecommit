// styles/global-style.ts
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
    background-color: ${({ theme }) => theme.color.background.page};
    color: ${({ theme }) => theme.color.text.primary};
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  section {
  scroll-margin-top: 80px; /* 헤더 높이 만큼 여유 */
}

  button {
    font: inherit;
  }
`;

export default GlobalStyle;
