// import React from 'react';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { RootState } from '../../6_shared/redux/redux-store';
// import { FatInter20,OrderText } from '../../6_shared/text/styled-text';
// import { GreenButton } from '../../6_shared/button';
// import { myBeige, myGray } from '../../6_shared/colors';

// export const OrderSummary: React.FC = () => {

//   const getTotalPrice = useSelector((state: RootState) => state.arr.productsPrice);
//   const additionalExpenses = {
//     Tax:2,
//     Shipping:3.99,
//   }
//   const setTotal = getTotalPrice + additionalExpenses.Tax + additionalExpenses.Shipping;
//   const fixedPrice = setTotal.toFixed(2);

//   return (
//     <Container>
//       <Title>Order summary</Title>
//       <SummaryRow>
//         <OrderText>Subtotal</OrderText>
//         <OrderText>${getTotalPrice}</OrderText>
//       </SummaryRow>
//       <SummaryRow>
//         <OrderText>Shipping</OrderText>
//         <OrderText>${additionalExpenses.Shipping}</OrderText>
//       </SummaryRow>
//       <SummaryRow>
//         <OrderText>Tax</OrderText>
//         <OrderText>${additionalExpenses.Tax}</OrderText>
//       </SummaryRow>
//       <TotalRow>
//         <OrderText><b>Total</b></OrderText>
//         <OrderText><b>${fixedPrice}</b></OrderText>
//       </TotalRow>
//       <GreenButton label="Continue to payment" element={<span className="arrow">→</span>}/>
//     </Container>
//   );
// };

// const Container = styled.aside`
//   border:1px ${myGray} solid;
//   background-color: ${myBeige};
//   border-radius: 1.5rem;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 1.5rem;
//   max-width: 24rem;
//   position:fixed;
// `;

// const Title = styled(FatInter20)`
//   font-size: 1.125rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
// `;

// const SummaryRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 0.5rem;
// `;

// const TotalRow = styled(SummaryRow)`
//   font-weight: 600;
//   margin-bottom: 1.5rem;
// `;

// const ContinueButton = styled.button`
//   width: 100%;
//   background-color: #16a34a;
//   color: white;
//   padding: 0.5rem 0;
//   border-radius: 0.375rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 500;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #15803d;
//   }

//   .arrow {
//     margin-left: 0.5rem;
//   }
// `;
