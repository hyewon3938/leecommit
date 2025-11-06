import styled from "styled-components";
import Image from "next/image";
import apple01 from "@/assets/images/collection/apple01.jpg";
import apple02 from "@/assets/images/collection/apple02.jpg";
import greenTree01 from "@/assets/images/collection/greenTree01.jpg";
import greenTree02 from "@/assets/images/collection/greenTree02.jpg";
import stb01 from "@/assets/images/collection/stb01.jpeg";
import stb02 from "@/assets/images/collection/stb02.jpeg";
import bird01 from "@/assets/images/collection/bird01.jpeg";
import bird02 from "@/assets/images/collection/bird02.jpeg";
import plant01 from "@/assets/images/collection/plant01.jpeg";
import plant02 from "@/assets/images/collection/plant02.jpeg";
import plant03 from "@/assets/images/collection/plant03.jpeg";

const CollectionSection = () => {
  return (
    <Wrap id="collection">
      <Title>Collection</Title>

      <ItemWrap>
        <Image src={greenTree01} alt="prd1" />
        <Image src={greenTree02} alt="prd2" />
      </ItemWrap>
      <ItemWrap>
        <Image src={stb01} alt="prd1" />
        <Image src={stb02} alt="prd2" />
      </ItemWrap>
      <ItemWrap>
        <Image src={apple01} alt="prd1" />
        <Image src={apple02} alt="prd2" />
      </ItemWrap>
      <ItemWrap>
        <Image src={bird02} alt="prd2" />
        <Image src={bird01} alt="prd1" />
      </ItemWrap>
      <SingleImageWrap>
        <Image src={plant01} alt="prd1" />
        <Image src={plant02} alt="prd1" />
        <Image src={plant03} alt="prd1" />
      </SingleImageWrap>
    </Wrap>
  );
};

export default CollectionSection;

const Wrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 80px 20px 40px;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    padding: 20px;
    gap: 10px;
  }
`;
const Title = styled.h1`
  font-family: "DosGothic";
`;

const ItemWrap = styled.div`
  display: flex;
  width: 100%;
  > img {
    width: 50%;
    height: auto;
  }
`;

const SingleImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > img {
    width: inherit;
    height: auto;
  }
`;
