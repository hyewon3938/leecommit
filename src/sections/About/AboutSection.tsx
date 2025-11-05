import styled from "styled-components";

const AboutSection = () => {
  return <Wrap id="about">About</Wrap>;
};

export default AboutSection;

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;
