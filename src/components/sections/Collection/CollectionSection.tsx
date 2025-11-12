import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Section from "@/components/sections/Section";
import Carousel from "@/components/Carousel";
import { bookmarkProducts } from "@/data/products";

type Product = {
  id: string;
  name: string;
  imageUrl: string[];
  link?: string;
};

const CollectionSection = () => {
  const typedProducts = bookmarkProducts as Product[];
  return (
    <Section id="collection" title="Collection" paddingMobile="30px 0px">
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
                {product.imageUrl.map((url, i) => (
                  <Half key={i}>
                    <Image
                      src={url}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 320px"
                      style={{ objectFit: "cover" }}
                    />
                  </Half>
                ))}
                <Info>{/* <Name>{product.name}</Name> */}</Info>
              </ImageWrap>
            </Card>
          )}
        />
      </CardsWrap>
    </Section>
  );
};

export default CollectionSection;

const CardsWrap = styled.div`
  width: 100%;
`;

const Card = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    padding: 0 0 16px 0;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 0.72;
  background: #f5f5f5;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out,
    border-color 0.15s ease-out;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.12);
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    &:hover {
      transform: unset;
      box-shadow: unset;
      border-color: unset;
    }
  }
`;

const Half = styled.div`
  flex: 1;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
`;

const Name = styled.div`
  color: #fff;
  background-color: #000;
  padding: 12px 16px;
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;
