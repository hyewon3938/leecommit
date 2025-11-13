"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgrondImage from "@/assets/images/background.webp";
import MainImage from "@/assets/images/main_product.webp";
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
            <Image src={MainImage} alt="main image" />
            <TitleCard>˚✧₊⁎ 즐거운 독서의 시작 ⁎⁺˳✧༚</TitleCard>
          </ImageWrap>
        </MainContentsWrap>
        <Image
          src={BackgrondImage}
          alt="leecommit background"
          fill
          style={{ objectFit: "cover" }}
          priority
          placeholder="blur"
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
  width: 100%;
  height: 100vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 500px;
    height: fit-content;
    max-height: 80vh;
    object-fit: contain;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    > img {
      width: 80%;
      height: fit-content;
    }
  }
`;

const TitleCard = styled.div`
  position: absolute;
  top: 60px;
  width: fit-content;
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
