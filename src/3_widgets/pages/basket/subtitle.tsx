import React, { useEffect } from "react";
import styled from "styled-components";
//TODO import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../6_shared/redux/redux-store";
import { Title } from "../../../6_shared/text/titles";
import { myGray } from "../../../6_shared/colors";

const BasketSubtitle: React.FC = () => {
    // const dispatch = useDispatch();

    // const setAmountItems = useSelector((state: RootState) => state.arr.productAmount);

    // useEffect(() => {
    //     dispatch({ type: 'GET_PRODUCT_AMOUNT' }); 
    // }, [dispatch]);

    return (
        <Section>
            <TitleContainer>
                <Title label='Basket'/>
                {/* <ItemCount>item {setAmountItems}</ItemCount> */}
            </TitleContainer>
        </Section>
    );
};

export default BasketSubtitle;

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin: 0 5rem 0 ;
    border-bottom: 1px ${myGray} solid;
    /*TODO ПОСМОТРЕТЬ МАКЕТ ФИГМЫ, ТАМ СНИЗУ ТЕНЬ */
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
 /*TODO ПРИЖАТЬ ИТЕМЫ К НИЗУ */
const ItemCount = styled.h6`
    font-family:'Inter',serif;
    font-size:20px;
    font-weight: 300;
`;
