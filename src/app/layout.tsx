import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export const metadata: Metadata = {
  title: "리커밋 | 즐거운 독서의 시작",
  description:
    "리커밋은 감각적인 끈갈피와 비즈 오브제를 만드는 브랜드입니다. 당신의 일상에 작은 평화를 더해보세요.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "리커밋 | 즐거운 독서의 시작",
    description:
      "감각적인 끈갈피와 비즈 오브제, 리커밋에서 당신의 하루를 더 특별하게.",
    url: "https://leecommit.kr",
    siteName: "리커밋 leeCommit",
    images: [
      {
        url: "https://leecommit-assets.s3.ap-northeast-2.amazonaws.com/brand/meta_image.jpg",
        width: 1200,
        height: 630,
        alt: "리커밋 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P85C9D72');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P85C9D72"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
