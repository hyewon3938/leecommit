"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/About";
import CollectionSection from "@/components/sections/Collection";
import SpaceSection from "@/components/sections/Space";
import ContactSection from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <MainContentsWrap>
          <ImageWrap>
            <Image
              src="/main_product.webp"
              alt="main image"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
            <TitleCard>˚✧₊⁎ 즐거운 독서의 시작 ⁎⁺˳✧༚</TitleCard>
          </ImageWrap>
        </MainContentsWrap>
        <BackgroundImage
          src="/background.webp"
          alt="leecommit background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Main>
      <ContentsWrap>
        <AboutSection />
        <CollectionSection />
        <SpaceSection />
        <ContactSection />
        <Footer />
      </ContentsWrap>
    </>
  );
}

const ContentsWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  /* gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 20px;
  } */
`;

const Main = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const BackgroundImage = styled(Image)`
  z-index: 0;
`;

const MainContentsWrap = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 650px;
  max-height: 80vh;
  height: min(80vh, 700px);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80%;
  }
`;

const TitleCard = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  height: fit-content;
  background-color: #fff;
  border: solid 3px #000;
  font-family: "DosGothic";
  font-weight: 700;
  font-size: 20px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
    /* margin: 0 16px 0 16px;
    font-size: 16px;
    padding: 12px;
    top: 30px; */
  }
`;
