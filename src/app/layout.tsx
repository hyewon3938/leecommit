import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export const metadata: Metadata = {
  title: "리커밋 | 즐거운 독서의 시작",
  description: "리커밋 브랜드 소개 페이지",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
