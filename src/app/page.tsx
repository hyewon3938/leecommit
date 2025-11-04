"use client";

import styled from "styled-components";

export default function HomePage() {
  const storeUrl = process.env.NEXT_PUBLIC_SMARTSTORE_URL ?? "#";

  return (
    <PageContainer>
      <Hero>
        <BrandName>즐거운 독서의 시작, 리커밋</BrandName>
        <Subtitle>
          자꾸 책이 읽고 싶어지는 감각적인 끈갈피와 함께, 읽는 시간을 조금 더
          기분 좋은 순간으로 만듭니다.
        </Subtitle>

        <StoreBadgeRow>
          <StoreBadge>📍 제주 고산의 낮</StoreBadge>
          <StoreBadge>📍 부산 롯데백화점 광복점 네모네</StoreBadge>
        </StoreBadgeRow>

        <PrimaryButton href={storeUrl} target="_blank" rel="noreferrer">
          스토어 바로가기
        </PrimaryButton>
      </Hero>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 20px 80px;
`;

const Hero = styled.section`
  background-color: ${({ theme }) => theme.color.background.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  padding: 32px 28px;
  margin-top: 40px;
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
`;

const BrandName = styled.h1`
  font-size: 28px;
  margin: 0 0 8px;
`;

const Subtitle = styled.p`
  margin: 0 0 20px;
  color: ${({ theme }) => theme.color.text.subtle};
  font-size: 15px;
  line-height: 1.5;
`;

const StoreBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const StoreBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background-color: ${({ theme }) => theme.color.brand.soft};
  color: #fff;
  font-size: 13px;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.brand.main};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  text-decoration: none;

  &:hover {
    opacity: 0.96;
  }
`;
