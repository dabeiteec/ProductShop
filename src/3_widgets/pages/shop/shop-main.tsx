import React from "react";
import { ShopCard } from './card.tsx';
import product from '../../../1_app/types/database.ts';
import styled from "styled-components";

export const ShopMain: React.FC = () => {
  return (
    <Section>
      {Object.keys(product).map((key) => (
        <ShopCard
          key={key}
          productName={product[key].name}
          productPrice={product[key].price}
          productImg={product[key].img}
          productFrom={product[key].description}
        />
      ))}
    </Section>
  );
};

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem; 
  padding: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
