import React from "react";
import styled from "styled-components";
import Section from "@/components/sections/Section";
import CommonImage from "@/components/CommonImage";

const SpaceSection = () => {
  const S3_BASE = process.env.NEXT_PUBLIC_S3_BASE_URL + "/space";

  return (
    <Section id="space" title="Space" paddingMobile="30px 20px 60px 20px">
      <ContentWrap>
        <SpaceList>
          <SpaceItemWrap>
            <CommonImage src={`${S3_BASE}/space_gosan.webp`} alt="space1" />
            <p>제주 고산의 낮</p>
            <address>제주 제주시 한경면 고산로 26-1</address>
          </SpaceItemWrap>
          {/* <SpaceItemWrap>
            <CommonImage src={`${S3_BASE}/space_nemone.webp`} alt="space2" />
            <p>부산 롯데백화점 광복점 네모네</p>
            <address>
              부산 중구 중앙대로 2 롯데백화점 광복점 아쿠아몰 4층
            </address>
          </SpaceItemWrap> */}
        </SpaceList>
      </ContentWrap>
    </Section>
  );
};

export default SpaceSection;

const ContentWrap = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
`;

const SpaceList = styled.ul`
  display: flex;
  width: 100%;
  gap: 32px;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    flex-direction: column;
  }
`;
const SpaceItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 15px;

  > p {
    font-weight: 600;
    margin: 12px 0 2px 0;
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    > p {
      font-size: 13px;
      margin: 8px 0 4px 0;
    }
    > address {
      font-size: 13px;
    }
  }
`;
