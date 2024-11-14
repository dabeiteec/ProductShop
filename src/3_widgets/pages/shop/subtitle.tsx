import React from "react";
import styled from "styled-components";

export const ShopSubtitle: React.FC = () => {
  return (
    <Section>
      <LeftContainer>
        <h1>Produce</h1>
        <DateInfo>
          <h6>Fresh</h6>
          <span>— August 21, 2023</span>
        </DateInfo>
      </LeftContainer>
      <ButtonContainer>
        <ButtonDefault>Default</ButtonDefault>
        <Button> A-Z </Button>
        <Button> List view </Button>
      </ButtonContainer>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5rem; 
  margin-top: 2rem; 
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
`;

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  font-size: 0.875rem; 
  color: #6b7280; 

  h6 {
    font-weight: 500; 
  }

  span {
    color: #9ca3af; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem; 
`;

const Button = styled.button`
  border: 1px solid #d1d5db; 
  color: #000; 
  padding: 0.5rem 1rem; 
  border-radius: 9999px; 
  outline: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;

const ButtonDefault = styled(Button)`
  background-color: #426B1F; 
  color: white;

  &:hover {
    background-color: #5c9b25; 
  }
`;

