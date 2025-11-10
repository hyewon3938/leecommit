import styled from "styled-components";
import Image from "next/image";
import Carousel from "@/components/Carousel.tsx";
import { bookmarkProducts } from "@/data/products.ts";

type Product = {
  id: string;
  name: string;
  imageUrl: string[];
  link?: string;
};

const CollectionSection = () => {
  const typedProducts = bookmarkProducts as Product[];

  return (
    <Wrap id="collection">
      <Title>Collection</Title>
      <CardsWrap>
        <Carousel
          items={typedProducts}
          getKey={(product) => product.id}
          // swiperOptions는 필요하면 여기서만 살짝 덮어쓰기
          // swiperOptions={{ slidesPerView: 1.2 }}
          renderItem={(product) => (
            <Card
              href={product.link || "#"}
              target={product.link ? "_blank" : undefined}
              rel={product.link ? "noopener noreferrer" : undefined}
            >
              <ImageWrap>
                <Image
                  src={product.imageUrl[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 320px"
                  style={{ objectFit: "cover" }}
                />
              </ImageWrap>
              <Info>
                <Name>{product.name}</Name>
                {product.price && <Price>{product.price}</Price>}
              </Info>
            </Card>
          )}
        />
      </CardsWrap>
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

// const ItemWrap = styled.div`
//   display: flex;
//   width: 100%;
//   > img {
//     width: 50%;
//     height: auto;
//   }
// `;

// const SingleImageWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   > img {
//     width: inherit;
//     height: auto;
//   }
// `;

const CardsWrap = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

const Card = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;

  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #ffffff;

  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out,
    border-color 0.15s ease-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.12);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 72%;
  background: #f5f5f5;
`;

const Info = styled.div`
  padding: 16px 16px 18px;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Price = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;
