"use client";

import React from "react";
import styled from "styled-components";
import Logo from "@/assets/icons/logo.svg";
import { useScrollTop } from "@/hooks/useScrollTop";

const Header = () => {
  const storeUrl: string = process.env.NEXT_PUBLIC_SMARTSTORE_URL ?? "/shop";
  const isTop = useScrollTop(0); // 0px 이상 스크롤 시 false

  const refresh = (): void => {
    window.location.href = "/";
  };

  const handleMenuClick = (menuName: string) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "menu_click",
        menu_name: menuName,
      });
    }
  };

  return (
    <Wrap $isTop={isTop}>
      <Inner>
        <TopRow role="button" onClick={refresh} aria-label="Go to home">
          <Logo fill={isTop ? "#fff" : "#000"} />
        </TopRow>
        <Nav>
          <NavItem
            $isTop={isTop}
            href={storeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => handleMenuClick("Shop")}
          >
            Shop
          </NavItem>
          <NavItem
            $isTop={isTop}
            href="#about"
            onClick={() => handleMenuClick("About")}
          >
            About
          </NavItem>
          <NavItem
            $isTop={isTop}
            href="#collection"
            onClick={() => handleMenuClick("Collection")}
          >
            Collection
          </NavItem>
          <NavItem
            $isTop={isTop}
            href="#space"
            onClick={() => handleMenuClick("Space")}
          >
            Space
          </NavItem>
          <NavItem
            $isTop={isTop}
            href="#contact"
            onClick={() => handleMenuClick("Contact")}
          >
            Contact
          </NavItem>
        </Nav>
      </Inner>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header<{ $isTop: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  width: 100%;
  z-index: 10;
  background-color: ${({ $isTop }) => ($isTop ? "transparent" : "#fff")};
  border-bottom: ${({ $isTop }) =>
    $isTop ? "none" : "1px solid rgba(0,0,0,0.1)"};
  transition: background-color 0.25s ease, border-color 0.25s ease,
    border-bottom 0.25s ease;
`;

const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 ${({ theme }) => theme.layout.gutter};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    row-gap: 16px;
    height: auto;
    padding: 16px 16px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 5px 0%;
  svg {
    height: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  font-size: 14px;
`;

const NavItem = styled.a<{ $isTop: boolean }>`
  border: none;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: ${({ $isTop }) => ($isTop ? "#fff" : "#000")};
  transition: color 0.25s ease, opacity 0.2s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;
