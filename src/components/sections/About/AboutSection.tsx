import React from "react";
import Image from "next/image";
import styled from "styled-components";
import backgrondImage from "@/assets/images/about.webp";
import squareLogo from "@/assets/icons/square_logo.webp";
import Section from "@/components/sections/Section";

const AboutSection = () => {
  return (
    <Section id="about" title="About">
      <ContentsWrap>
        <ImageWrap>
          <Image src={backgrondImage} alt="leecommit about image" />
        </ImageWrap>
        <LogoTextWrap>
          <LogoWrap>
            <Image src={squareLogo} alt="leecommit square logo" />
          </LogoWrap>
          <TextWrap>
            <p>
              리커밋은 책을 읽는 시간이
              <br /> 일상의 즐거움이 되길 바라는 마음에서 시작되었습니다.
            </p>
            {/* <p>
            책을 펼치는 순간, 작지만 기분 좋은 이유 하나가 더해지길 바랍니다.
          </p> */}
            <p>
              읽는다는 건 결국 이어가는 일이라 믿습니다.
              <br />
              매일 펼치지 않아도 다시 펼치게 되는 그 마음에
              <br /> 리커밋이 이유가 되고 싶습니다.
            </p>
            <p>
              현재는 끈갈피에 이어 비즈 식물 작품을 선보이며,
              <br /> 독서의 즐거움이 머무는 공간에도 작은 평화를 더하고
              있습니다.
            </p>
            <p>
              리커밋은 모든 제품을 수작업으로 정성스럽게 제작하며,
              <br /> 책과 공간 속에 자연스럽게 어우러지는 오브제를 만들어갑니다.
            </p>
            <p>책을 읽는 마음, 쉬어가는 순간에 함께할 수 있기를 바랍니다.</p>
          </TextWrap>
        </LogoTextWrap>
      </ContentsWrap>
    </Section>
  );
};

export default AboutSection;

const ContentsWrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 40px;
  height: 600px;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    height: auto;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  height: 100%;
  > img {
    width: auto;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    width: 100%;
    height: auto;
    > img {
      width: 100%;
      height: auto;
    }
  }
`;

const LogoTextWrap = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
  }
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  > img {
    height: 175px;
    width: auto;
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    display: none;
  }
`;

const TextWrap = styled.div`
  word-break: keep-all;
  line-height: 1.5;
  font-size: 15px;
  > p {
    margin: 10px 0;
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    font-size: 14px;
    > p {
      margin: 10px 0;
    }
  }
`;
