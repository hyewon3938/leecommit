import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    // 1️⃣ SVG 파일을 React 컴포넌트로 import 가능하게 설정
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // js, ts, tsx 파일에서만 적용
      use: ["@svgr/webpack"],
    });

    // 2️⃣ 경로 alias 추가 (선택, @ → src 폴더)
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    return config;
  },
};

export default nextConfig;
