import React, { useState, useEffect } from "react";
import { ShopCard } from '../../../4_entities/Shop/card.tsx';
import styled from "styled-components";
import { getProducts } from "../../../5_features/SHop/api.ts";

export const ShopMain: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const userId = 1; //TODO заменить на userId из контекста

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Ошибка при загрузке продуктов:", error);
      }
    };
  
    fetchProducts();
  }, []);
  
  return (
    <Section>
      {products.length > 0 ? (
        products.map((product) => (
          <ShopCard
            key={product.id}
            productId={product.id} 
            productName={product.name}
            productPrice={product.price}
            productImg={product.imgPath } 
            productFrom={product.description}
            userId={userId} 
          />
        ))
      ) : (
        <p>Загрузка товаров...</p>
      )}
    </Section>
  );
};

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

