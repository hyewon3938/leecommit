import styled from "styled-components";
import LogoIcon from "@/assets/icons/vertical_logo.svg";
import Image from "next/image";

import HorizontalLogo from "@/assets/icons/horizontal_logo.png";
import Navigation from "@/components/Navigation";

const Header = () => {
  const storeUrl = process.env.NEXT_PUBLIC_SMARTSTORE_URL ?? "/shop";

  return (
    <Wrap>
      {/* <a href={storeUrl} target="_blank" rel="noreferrer">
        <LogoIcon width={280} />
      </a> */}
      <LogoIcon height={90} />
      {/* <Image src={HorizontalLogo} alt="leecommit logo" height={40} /> */}
      <Navigation />
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #fff;
  padding: 0 20px 0 0;
  z-index: 1;
`;
