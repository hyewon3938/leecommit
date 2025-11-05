import styled from "styled-components";
import Logo from "@/assets/icons/horizontal_logo.png";
import Image from "next/image";

const Header = () => {
  const storeUrl = process.env.NEXT_PUBLIC_SMARTSTORE_URL ?? "/shop";
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrap>
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
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  width: 100%;
  padding: 16px 16px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 10;

  /* 데스크탑에서는 기존처럼 한 줄로 정렬하고 싶으면 이렇게 */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
    padding: 0 16px;
  }
`;

const TopRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
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

  /* 필요하면 */
  /* text-transform: uppercase; */

  &:hover {
    text-decoration: underline;
  }
`;
