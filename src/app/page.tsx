"use client";

import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header";
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
    </>
  );
}

const ContentsWrap = styled.div`
  position: relative;
  width: 100%;
`;

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
