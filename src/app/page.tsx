"use client";

import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header";
import BrandPhilosophySection from "@/sections/BrandPhilosophy";
import BackgrondImage from "@/assets/images/background_product.webp";

export default function HomePage() {
  return (
    <PageContainer>
      <Header />
      <Background>
        <BgWrapper>
          <Image
            src={BackgrondImage}
            alt="leecommit background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
            placeholder="blur"
          />
        </BgWrapper>
      </Background>
      <ContentsWrap>
        <BrandTitle></BrandTitle>
        <Contents></Contents>
        <BrandPhilosophySection />
      </ContentsWrap>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  position: relative;
`;

const ContentsWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 70px 0 0;
  margin-top: -100vh;
`;

const BrandTitle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #fff;
`;

const Contents = styled.div`
  width: 100%;
  height: 200vh;
  background-color: #fff;
  border-radius: 48px 48px 0 0;
`;

const Background = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
`;
const BgWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`;
