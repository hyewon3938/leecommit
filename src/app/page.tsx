"use client";

import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgrondImage from "@/assets/images/background_product.webp";
import AboutSection from "@/sections/About";
import CollectionSection from "@/sections/Collection";
import SpaceSection from "@/sections/Space";
import ContactSection from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
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
        <AboutSection />
        <CollectionSection />
        <SpaceSection />
        <ContactSection />
      </ContentsWrap>
      <Footer />
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

const TitleCard = styled.div`
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
  }
`;

const ImageWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`;

const ContentsWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  border-radius: 36px 36px 0 0;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 24px 24px 0 0;
  }
`;
