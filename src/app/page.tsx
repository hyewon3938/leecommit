"use client";

import styled from "styled-components";
import LogoIcon from "@/assets/icons/vertical_logo.svg";

export default function HomePage() {
  const storeUrl = process.env.NEXT_PUBLIC_SMARTSTORE_URL ?? "/shop";

  return (
    <PageContainer>
      <Title>즐거운 독서의 시작</Title>
      <a href={storeUrl} target="_blank" rel="noreferrer">
        <LogoIcon width={280} />
      </a>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 280px;
  }
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 50px;
  //border: solid 1px red;
`;
