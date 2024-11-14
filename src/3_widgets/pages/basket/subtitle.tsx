import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../6_shared/redux/redux-store";

const BasketSubtitle: React.FC = () => {
    const dispatch = useDispatch();

    const setAmountItems = useSelector((state: RootState) => state.arr.productAmount);

    useEffect(() => {
        dispatch({ type: 'GET_PRODUCT_AMOUNT' }); 
    }, [dispatch]);

    return (
        <Section>
            <TitleContainer>
                <Title>Basket</Title>
                <ItemCount>item {setAmountItems}</ItemCount>
            </TitleContainer>
        </Section>
    );
};

export default BasketSubtitle;

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    margin-top: 2rem;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: 1.875rem;
    font-family: serif;
    font-weight: bold;
`;

const ItemCount = styled.h6`
    font-weight: 500;
`;
