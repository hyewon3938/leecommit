// styles/theme.ts
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    background: {
      page: "#F7F5F0",
      surface: "#FFFFFF",
    },
    text: {
      primary: "#222222",
      subtle: "#6B7280",
    },
    brand: {
      main: "#3A5A40", // 리커밋 톤 그린
      soft: "#A3B18A",
    },
    border: {
      subtle: "#E5E7EB",
    },
  },
  radius: {
    sm: "6px",
    md: "10px",
    lg: "14px",
    pill: "999px",
  },
  shadow: {
    soft: "0 6px 16px rgba(15, 23, 42, 0.08)",
  },
};
