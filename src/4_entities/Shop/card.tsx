import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { myBeige,lightGray } from "../../6_shared/colors";
import { FatInter20,FatInerGreen20,Description } from "../../6_shared/text/styled-text";

interface ShopCardProps {
  productName: string;
  productPrice: number;
  productImg: string;
  productFrom: string;
}

interface CartItem {
  productName: string;
  productPrice: number;
  productImg: string;
  productFrom: string;
}

export const ShopCard: React.FC<ShopCardProps> = ({
  productName,
  productPrice,
  productImg,
  productFrom,
}) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isAdded, setIsAdded] = useState(false); 

  const addProduct = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const addToCart = () => {
    const newProduct: CartItem = { productName, productPrice, productImg, productFrom };
    const isProductInCart = cart.some((product) => product.productName === productName);

    if (!isProductInCart) {
    
      setCart((prevCart: CartItem[]) => [...prevCart, newProduct]);
      setIsAdded(true); 
      setTimeout(() => setIsAdded(false), 600); 
      addProduct({
        type: "ADD_PRODUCT",
        payload: newProduct,
      });

    } else {
      alert("Этот продукт уже в корзине!");
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
      <AddButton onClick={addToCart} isAdded={isAdded}>
        <FaPlus />
      </AddButton>
    </Card>
  );
};

const Card = styled.article`
  background-color: ${myBeige};
  border:2px ${lightGray} solid;
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
`
const AddButton = styled.button.attrs<{ isAdded: boolean }>((props) => ({
  // Проп удаляется из DOM и используется только для стилизации
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
