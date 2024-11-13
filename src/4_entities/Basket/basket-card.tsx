import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import styled from 'styled-components';

interface ShopCardProps {
    productName: string;
    productPrice: number;
    productImg: string;
    onRemove: (productName: string) => void;
}

export const BasketCard: React.FC<ShopCardProps> = ({
    productName,
    productPrice,
    productImg,
    onRemove,
}) => {
    const [productQuantity, setProductQuantity] = useState(1);

    const calculateFinalPrice = () => {
        return (productPrice * productQuantity).toFixed(2);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (value > 0) {
            setProductQuantity(value);
        }
    };

    const handleRemove = () => {
        onRemove(productName);
    };

    return (
            <Card>
              <ProductInfo>
                <ProductImage src={productImg} alt={productName} />
                <ProductDetails>
                  <ProductName>{productName}</ProductName>
                  <ProductPrice>
                    ${productPrice} <PriceUnit>/ lb</PriceUnit>
                  </ProductPrice>
                </ProductDetails>
              </ProductInfo>
              <PriceSection>
                <FinalPrice>${calculateFinalPrice()}</FinalPrice>
                <QuantityControl>
                  <QuantityInput type="number" value={productQuantity} min="1" onChange={handleQuantityChange} />
                  <FaPen className="edit-icon" />
                </QuantityControl>
              </PriceSection>
              <RemoveButton onClick={handleRemove}>
                <FaMinus />
              </RemoveButton>
            </Card>
          );
};
const Card = styled.section`
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 5rem; /* Заменяет w-20 */
  height: 5rem; /* Заменяет h-20 */
  object-fit: cover;
  border-radius: 0.5rem;
`;

const ProductDetails = styled.div`
  padding-left: 1rem;
`;

const ProductName = styled.span`
  display: block;
  font-size: 1.125rem; /* Заменяет text-lg */
  font-weight: 600;
  color: #1f2937; /* Заменяет text-gray-800 */
  text-transform: capitalize;
`;

const ProductPrice = styled.span`
  display: block;
  font-size: 1.25rem; /* Заменяет text-xl */
  font-weight: bold;
  color: #16a34a; /* Заменяет text-green-600 */
`;

const PriceUnit = styled.span`
  font-size: 0.875rem; /* Заменяет text-sm */
  color: #6b7280; /* Заменяет text-gray-500 */
`;

const PriceSection = styled.div`
  text-align: right;
  margin-right: 2rem;
`;

const FinalPrice = styled.span`
  display: block;
  font-size: 1.125rem; /* Заменяет text-lg */
  font-weight: 600;
  color: black;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  background-color: #f3f4f6; /* Заменяет bg-gray-100 */
  padding: 0.5rem;
  border-radius: 0.375rem;
`;

const QuantityInput = styled.input`
  width: 3rem;
  text-align: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #dc2626; /* Заменяет bg-red-600 */
  padding: 0.5rem;
  border-radius: 9999px; /* Заменяет rounded-full */
  color: #f3f4f6; /* Заменяет text-gray-100 */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b91c1c; /* Заменяет hover:bg-red-700 */
  }
`;