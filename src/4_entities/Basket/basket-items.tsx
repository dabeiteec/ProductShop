import React, { useEffect, useState } from "react";
import { BasketCard } from './basket-card.js';
import styled from "styled-components";

interface Product {
    productName: string;
    productPrice: number;
    productImg: string;
    productFrom: string;
}

export const BasketItems: React.FC = () => {
    const [cart, setCart] = useState<Product[]>([]); 

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const handleRemoveProduct = (productName: string) => {
        const updatedCart = cart.filter(product => product.productName !== productName);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    };

    return (
        <Container>
          {cart.map((product) => (
            <BasketCard
              key={product.productName}
              productName={product.productName}
              productPrice={product.productPrice}
              productImg={product.productImg}
              onRemove={handleRemoveProduct}
            />
          ))}
        </Container>
      );
    };
    
    // Styled components
    
    const Container = styled.section`
      max-width: 1200px; /* Заменяет mx-auto */
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem; /* Заменяет gap-6 */
      padding: 1rem; /* Заменяет p-4 */
    `;