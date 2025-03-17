import React from "react";
import BasketItems  from '../../../4_entities/Basket/basket-items.js'
// import { OrderSummary } from "../../../5_features/Basket/calculate.js";
import styled from 'styled-components';

export const BasketMain: React.FC = () => {
    
    return (
    <Section className="container mx-auto flex flex-row gap-6 p-4">
        <BasketContainer className="w-3/4">
            <BasketItems />
        </BasketContainer>
        <SummaryContainer className="w-1/4">
            {/* <OrderSummary /> */}
        </SummaryContainer>
    </Section>
    );
};
const Section = styled.main`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  gap: 5rem; 
  padding: 1rem;
  max-width: 1200px; 
  margin: 0 auto;
`;

const BasketContainer = styled.div`
  flex: 3;
`;

const SummaryContainer = styled.aside`
  flex: 1;
`;