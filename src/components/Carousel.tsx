"use client";

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getKey?: (item: T, index: number) => React.Key;
  swiperOptions?: SwiperOptions;
  className?: string;
};

const Carousel = <T,>({
  items,
  renderItem,
  getKey,
  swiperOptions,
  className,
}: CarouselProps<T>) => {
  const defaultOptions: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 16,
    slidesPerView: 1.1,
    centeredSlides: false,
    navigation: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.1,
        spaceBetween: 24,
      },
    },
  };

  const mergedOptions: SwiperOptions = {
    ...defaultOptions,
    ...swiperOptions,
    breakpoints: {
      ...(defaultOptions.breakpoints || {}),
      ...(swiperOptions?.breakpoints || {}),
    },
  };

  return (
    <CarouselRoot className={className}>
      <Swiper {...mergedOptions}>
        {items.map((item, index) => (
          <SwiperSlide key={getKey ? getKey(item, index) : index}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselRoot>
  );
};

export default Carousel;

const CarouselRoot = styled.div`
  width: 100%;

  .swiper {
    padding-bottom: 32px;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    opacity: 0.4;
    background: rgba(0, 0, 0, 0.5);
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 40%;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;
