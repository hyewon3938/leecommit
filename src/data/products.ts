export type Product = {
  id: string;
  name: string;
  //   price?: string;
  imageUrl: string[];
  link?: string;
};

const S3_BASE = process.env.NEXT_PUBLIC_S3_BASE_URL + "/products";
const STORE_MARKETING_LINK_BASE = "https://mkt.shopping.naver.com/link";

// 책갈피
export const bookmarkProducts: Product[] = [
  {
    id: "bookmark-01",
    name: "초록 꽃나무 끈갈피",
    imageUrl: [
      `${S3_BASE}/bookmark/01/01.webp`,
      `${S3_BASE}/bookmark/01/02.webp`,
    ],
    link: `${STORE_MARKETING_LINK_BASE}/6911a8cb0899f21b8ad51cfe`,
  },
  {
    id: "bookmark-02",
    name: "딸기 꽃 끈갈피",
    imageUrl: [
      `${S3_BASE}/bookmark/02/01.webp`,
      `${S3_BASE}/bookmark/02/02.webp`,
    ],
    link: `${STORE_MARKETING_LINK_BASE}/6911a8cb8099f270a76abebc`,
  },
  {
    id: "bookmark-03",
    name: "오로라 사과 끈갈피",
    imageUrl: [
      `${S3_BASE}/bookmark/03/01.webp`,
      `${S3_BASE}/bookmark/03/02.webp`,
    ],
    link: `${STORE_MARKETING_LINK_BASE}/68b108db2259e62bd9345331`,
  },
  {
    id: "bookmark-04",
    name: "행운의 짹갈피",
    imageUrl: [
      `${S3_BASE}/bookmark/04/01.webp`,
      `${S3_BASE}/bookmark/04/02.webp`,
    ],
    link: `${STORE_MARKETING_LINK_BASE}/6911a8cb26516b6754b68bc2`,
  },
];

// 비즈 식물
// export const plantProducts: Product[] = [
//   {
//     id: "plant-01",
//     name: "비즈 선인장 오브제",
//     imageUrl: `${S3_BASE}/plant/01/01.webp`,
//     link: "https://smartstore.naver.com/...",
//   },
// ];
