import React from "react";
import styled from "styled-components";

interface BasketSubtitleProps {
    basketItems: number;
  }
  
  export const BasketSubtitle: React.FC<BasketSubtitleProps> = ({ basketItems }) => {
    return (
      <Section>
        <TitleContainer>
          <Title>Basket</Title>
          <ItemCount>item {basketItems}</ItemCount>
        </TitleContainer>
      </Section>
    );
  };

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem; /* Заменяет px-20 */
  margin-top: 2rem; /* Заменяет mt-8 */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem; /* Заменяет space-x-4 */
`;

const Title = styled.h1`
  font-size: 1.875rem; /* Заменяет text-3xl */
  font-family: serif;
  font-weight: bold;
`;

const ItemCount = styled.h6`
  font-weight: 500; /* Заменяет font-medium */
`;
