"use client";

import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgrondImage from "@/assets/images/background.webp";
import MainImage from "@/assets/images/main_product.webp";
import AboutSection from "@/sections/About";
import CollectionSection from "@/sections/Collection";
import SpaceSection from "@/sections/Space";
import ContactSection from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <MainContentsWrap>
          <TitleCard>*~ 즐거운 독서의 시작 ~*</TitleCard>
          <Image src={MainImage} alt="main image" />
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

const Background = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 96px 0 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 130px 0 0 0;
  }
`;

const ContentsWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // margin: -100vh 0 0 0;
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
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 500px;
    height: fit-content;
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
  top: 200px;
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  border: solid 3px #000;
  font-family: "DosGothic";
  font-weight: 700;
  margin: 0 0 0 0;
  font-size: 20px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 16px 0 16px;
    font-size: 16px;
    padding: 12px;
    top: 200px;
  }
`;
