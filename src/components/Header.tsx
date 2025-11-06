import styled from "styled-components";
import Logo from "@/assets/icons/horizontal_logo.png";
import Image from "next/image";

const Header = () => {
  const storeUrl = process.env.NEXT_PUBLIC_SMARTSTORE_URL ?? "/shop";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.body.getBoundingClientRect();
  };

  return (
    <Wrap>
      <Inner>
        <TopRow>
          <Image
            src={Logo}
            alt="leecommit-logo"
            height={30}
            onClick={scrollToTop}
          />
        </TopRow>

        <Nav>
          <NavItem href={storeUrl} target="_blank" rel="noreferrer">
            Shop
          </NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#collection">Collection</NavItem>
          <NavItem href="#space">Space</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Nav>
      </Inner>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 16px;

  /* 모바일 전용 스타일 */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 16px;
    height: auto;
    padding: 16px 16px;
  }
`;

const TopRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
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

const NavItem = styled.a`
  border: none;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
