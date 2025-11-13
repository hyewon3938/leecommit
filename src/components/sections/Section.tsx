import { ReactNode, CSSProperties } from "react";
import styled from "styled-components";

interface SectionProps {
  id?: string;
  title?: string;
  backgroundColor?: CSSProperties["backgroundColor"];
  padding?: string;
  paddingMobile?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title = "",
  backgroundColor = "#fff",
  padding,
  paddingMobile,
  children,
}) => {
  return (
    <Wrap
      id={id}
      $backgroundColor={backgroundColor}
      $padding={padding}
      $paddingMobile={paddingMobile}
    >
      {title && <Title>{title}</Title>}
      {children}
    </Wrap>
  );
};

export default Section;

const Wrap = styled.section<{
  $backgroundColor: CSSProperties["backgroundColor"];
  $padding?: string;
  $paddingMobile?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: ${({ $padding }) => $padding ?? "80px 20px"};
  gap: 20px;

  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    padding: ${({ $paddingMobile }) => $paddingMobile ?? "30px 20px"};
    gap: 10px;
  }
`;

const Title = styled.h1`
  font-family: "HsJandari";
  font-size: 24px;
  margin: 0 0 40px 0;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile}) {
    margin: 0 0 20px 0;
    font-size: 20px;
  }
`;
