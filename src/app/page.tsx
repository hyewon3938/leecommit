"use client";

import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header";
import BrandStorySection from "@/sections/BrandStory/BrandStorySection";
import BackgrondImage from "@/assets/images/background_product.webp";

export default function HomePage() {
  return (
    <PageContainer>
      <Header />
      <Background>
        <TitleCard>*~ 즐거운 독서의 시작 ~*</TitleCard>
        <ImageWrap>
          <Image
            src={BackgrondImage}
            alt="leecommit background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
            placeholder="blur"
          />
        </ImageWrap>
      </Background>
      <ContentsWrap>
        <BrandStorySection />
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
  // margin-top: -100vh;
`;

// const BrandTitle = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
// `;

// const Contents = styled.div`
//   width: 100%;
//   height: 200vh;
//   background-color: #fff;
//   border-radius: 48px 48px 0 0;
// `;

const Background = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const TitleCard = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 20px;
  background-color: #fff;
  border: solid 3px #000;
  margin: 180px 16px 0 16px;
  font-size: 20px;
  font-family: "DosGothic";
  font-weight: 700;

  @media (min-width: 768px) {
    margin: 140px 0 0 0;
  }
`;

const ImageWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`;
