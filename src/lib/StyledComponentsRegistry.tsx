"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/global-style";

type Props = {
  children: React.ReactNode;
};

export default function StyledComponentsRegistry({ children }: Props) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  // 클라이언트 렌더링 시
  if (typeof window !== "undefined") {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  }

  // 서버 렌더링 시
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
