"use client";

import styled from "styled-components";
import Header from "@/components/Header";
import BrandPhilosophySection from "@/sections/BrandPhilosophy";
import BackgrondImage from "@/assets/images/background_product.jpeg";

export default function HomePage() {
  return (
    <PageContainer>
      <Header />
      <Background />
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
  width: 100%;
  height: 100vh;
  background: url(${BackgrondImage.src}) center / cover no-repeat;
`;
