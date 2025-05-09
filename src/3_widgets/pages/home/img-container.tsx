import React from "react";
import mainImg from './assets/left-img.png';
import subMainImg from './assets/right-img.png';
import styled from "styled-components";
import { ImgContainerText } from "../../../6_shared/text/styled-text";

export const ImgContainer: React.FC = () => {
  return (
    <Container>
      <LeftImg src={mainImg} alt="some vegetables" />
      <RightContainer>
        <img src={subMainImg} alt="some vegetables" />
        <AboutImg>
          <ImgContainerText>
          <strong>Central California</strong> — The person who grew these was located in
          Central California and, er, hopefully very well-compensated.
          </ImgContainerText>
        </AboutImg>
      </RightContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem; 
  @media (max-width:1399px) {
    flex-direction:column-reverse;
    gap:20px;
  }
`;
const LeftImg = styled.img`
  transform: translateX(-20px);
    animation: fadeIn 2s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    &:hover {
        transform: scale(1.03);
    }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(20px);
  animation: fadeIn 1.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    &:hover {
        transform: scale(1.2);
    }
`;

const AboutImg = styled.span`
  margin-top: 0.5rem;
  line-height: 1.5;
  
`;
