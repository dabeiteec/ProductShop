import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";
// TODO import { useDispatch, useSelector } from "react-redux";
import { myBeige, lightGray } from "../../6_shared/colors";
import { FatInter20, FatInerGreen20, Description } from "../../6_shared/text/styled-text";
import { createBasketItem } from "../../4_entities/Shop/api";

interface ShopCardProps {
  productId: number;
  productName: string;
  productPrice: number;
  productImg: string;
  productFrom: string;
  userId: number;
}

export const ShopCard: React.FC<ShopCardProps> = ({
  productId,
  productName,
  productPrice,
  productImg,
  productFrom,
  userId,
}) => {
  const [isAdded, setIsAdded] = useState(false); // состояние для анимации кнопки
  const token = localStorage.getItem("token"); // получаем токен из localStorage

  const addToBasket = async () => {
    if (token) {
      try {
        // const newProduct = { productId, productName, productPrice, productImg, productFrom };
        const response = await createBasketItem(productId); // передаем токен в запрос

        if (response) {
          setIsAdded(true); // меняем состояние, чтобы анимировать кнопку
          setTimeout(() => setIsAdded(false), 600); // сбрасываем анимацию через 600ms
        }
      } catch (error) {
        console.error("Ошибка при добавлении в корзину", error);
      }
    } else {
      alert("Пожалуйста, войдите в систему");
    }
  };

  return (
    <Card>
      <ProductImage src={productImg} alt={productName} />
      <ProductInfo>
        <ProductDetails>
          <ProductName>{productName}</ProductName>
          <ProductPrice>
            ${productPrice} <span>/ lb</span>
          </ProductPrice>
        </ProductDetails>
        <ProductFrom>{productFrom}</ProductFrom>
      </ProductInfo>
      <AddButton onClick={addToBasket} isAdded={isAdded}>
        <FaPlus />
      </AddButton>
    </Card>
  );
};

const Card = styled.article`
  background-color: ${myBeige};
  border: 2px ${lightGray} solid;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 18rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: black;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  margin: 0;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductDetails = styled.div`
  margin-bottom: 0.5rem;
`;

const ProductName = styled(FatInter20)`
  text-transform: capitalize;
`;

const ProductPrice = styled(FatInerGreen20)`
  display: block;
`;

const ProductFrom = styled(Description)`
  display: block;
`;

const AddButton = styled.button.attrs<{ isAdded: boolean }>((props) => ({
  isAdded: undefined,
}))<{ isAdded: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #2f855a;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, scale 0.2s ease;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.isAdded &&
    `
    transform: scale(1.2);
    animation: scaleUp 0.3s ease-out, scaleDown 0.3s ease-out 0.3s forwards;
  `}

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes scaleDown {
    0% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
