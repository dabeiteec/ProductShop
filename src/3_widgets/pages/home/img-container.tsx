import React from "react";
import mainImg from './assets/left-img.png';
import subMainImg from './assets/right-img.png';
import styled from "styled-components";

export const ImgContainer: React.FC = () => {
  return (
    <Container>
      <img src={mainImg} alt="some vegetables" />
      <RightContainer>
        <img src={subMainImg} alt="some vegetables" />
        <AboutImg>
          <b>Central California</b> — The person who grew these was located in
          Central California and, er, hopefully very well-compensated.
        </AboutImg>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem; /* p-4 */
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AboutImg = styled.span`
  margin-top: 0.5rem;
  color: #333333; /* Adjust color as needed */
  font-size: 1rem;
  line-height: 1.5;
`;
