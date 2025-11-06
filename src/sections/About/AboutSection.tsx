import Image from "next/image";
import styled from "styled-components";
import BackgrondImage from "@/assets/images/about.webp";

const AboutSection = () => {
  return (
    <Wrap id="about">
      <Title>About leeCommit</Title>
      <ContentsWrap>
        <ImageWrap>
          <Image src={BackgrondImage} alt="리커밋 끈갈피와 비즈 식물 작품" />
        </ImageWrap>
        <TextWrap>
          <p>
            일상이 될 독서 시간이 더 즐거워지길 바랍니다.
            <br />
            책을 펼치는 순간, 작지만 기분 좋을 이유 하나가 더해졌으면
            좋겠습니다.
          </p>
          <p>읽는다는 건 결국 이어가는 일이라고 믿습니다.</p>
          <p>
            매일 펼치지 않아도, 다시 펼치게 되는 그 마음에 리커밋이 기분 좋은
            이유가 되고 싶습니다. <br />
            이제는 끈갈피에 이어 비즈 식물 작품을 함께 선보이며 독서의 즐거움이
            머무는 공간에도 작은 평화를 더하고 있습니다.
          </p>
        </TextWrap>
      </ContentsWrap>
    </Wrap>
  );
};

export default AboutSection;

const Wrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 80px 20px 40px;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    padding: 20px;
  }
`;
const Title = styled.h1`
  font-family: "DosGothic";
`;

const ContentsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    flex-wrap: wrap;
  }
`;

const ImageWrap = styled.div`
  width: 400px;
  > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    width: 100%;
  }
`;

const TextWrap = styled.div`
  word-break: keep-all;
`;
