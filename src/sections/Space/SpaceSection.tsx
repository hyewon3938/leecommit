import styled from "styled-components";
import Image from "next/image";
import gosanIamge from "@/assets/images/space_gosan.jpg";
import nemoneImage from "@/assets/images/space_nemone.jpg";

const SpaceSection = () => {
  return (
    <Wrap id="space">
      <Title>Space</Title>
      <ContentWrap>
        <SpaceList>
          <SpaceItemWrap>
            <Image src={gosanIamge} alt="space1" />
            <p>제주 고산의 낮</p>
            <address>제주 제주시 한경면 고산로 26-1</address>
          </SpaceItemWrap>
          <SpaceItemWrap>
            <Image src={nemoneImage} alt="space2" />
            <p>부산 롯데백화점 광복점 네모네</p>
            <address>
              부산 중구 중앙대로 2 롯데백화점 광복점 아쿠아몰 4층
            </address>
          </SpaceItemWrap>
        </SpaceList>
      </ContentWrap>
    </Wrap>
  );
};

export default SpaceSection;

const Wrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 80px 20px 40px;

  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    padding: 16px;
  }
`;

const ContentWrap = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
`;

const Title = styled.h1`
  font-family: "DosGothic";
  margin: 0 0 16px 0;
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
  font-size: 16px;
  > img {
    width: inherit;
    height: auto;
  }
  > p {
    font-weight: 600;
    margin: 12px 0 2px 0;
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    font-size: 14px;
  }
`;
