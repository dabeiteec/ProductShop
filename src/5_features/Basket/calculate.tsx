import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../6_shared/redux/redux-store';

export const OrderSummary: React.FC = () => {

  const getTotalPrice = useSelector((state: RootState) => state.arr.productsPrice);
  const additionalExpenses = {
    Tax:2,
    Shipping:3.99,
  }
  const setTotal = getTotalPrice + additionalExpenses.Tax + additionalExpenses.Shipping;
  const fixedPrice = setTotal.toFixed(2);
  // useEffect(()=>{
  //   setTotal.toFixed(2)
  // })
  // const fixedPrice = ;
  return (
    <Container>
      <Title>Order summary</Title>
      <SummaryRow>
        <span>Subtotal</span>
        <span>${getTotalPrice}</span>
      </SummaryRow>
      <SummaryRow>
        <span>Shipping</span>
        <span>${additionalExpenses.Shipping}</span>
      </SummaryRow>
      <SummaryRow>
        <span>Tax</span>
        <span>${additionalExpenses.Tax}</span>
      </SummaryRow>
      <TotalRow>
        <span>Total</span>
        <span>${fixedPrice}</span>
      </TotalRow>
      <ContinueButton>
        Continue to payment
        <span className="arrow">→</span>
      </ContinueButton>
    </Container>
  );
};

// Styled components

const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 24rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const TotalRow = styled(SummaryRow)`
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ContinueButton = styled.button`
  width: 100%;
  background-color: #16a34a;
  color: white;
  padding: 0.5rem 0;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #15803d;
  }

  .arrow {
    margin-left: 0.5rem;
  }
`;
