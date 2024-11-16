import React, { useEffect, useState } from "react";
import { BasketCard } from './basket-card.js';
import styled from "styled-components";
import { useSelector } from "react-redux";
import {RootState} from '../../6_shared/redux/redux-store'

interface Product {
    productName: string;
    productPrice: number;
    productImg: string;
    productFrom: string;
}

export const BasketItems: React.FC = () => {
    const [cart, setCart] = useState<Product[]>([]); 
    const getProducts = useSelector((state:RootState) => state.arr.products);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const handleRemoveProduct = (productName: string) => {
        const updatedCart = cart.filter(product => product.productName !== productName);
        setCart(updatedCart);
        // localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    };

    return (
        <Container>
          {getProducts.map((product) => (
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
    
    
    const Container = styled.section`
      max-width: 1200px; 
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem; 
      padding: 1rem; 
    `;