import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// import { fetchBasketProducts } from "../../store/reducers/basket/ActionCreators";
import { getAllBasketItems } from "../../4_entities/Shop/api"; // твоя строка
import {BasketCard} from "./basket-card";
import styled from "styled-components";
interface BasketItem {
  id: number;
  name: string;
  price: number;
  imgPath: string;
  quantity: number;
}

const BasketItems = () => {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBasketItems = async () => {
      try {
        const data = await getAllBasketItems();
        if (data) {
          setItems(data);
        } else {
          setError("Ошибка загрузки товаров в корзине");
        }
      } catch (err) {
        setError("Ошибка загрузки товаров в корзине");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBasketItems();
  }, []);


  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      {items.length > 0 ? (
        items.map((item) => (
          <BasketCard key={item.id} product={item}  />
        ))
      ) : (
        <p>Корзина пуста</p>
      )}
    </Container>
  );
};

export default BasketItems;


// import React, { useEffect, useState } from "react";
// import { BasketCard } from './basket-card.js';
// import styled from "styled-components";
// import { useSelector } from "react-redux";
// import {RootState} from '../../6_shared/redux/redux-store'

// interface Product {
//     productName: string;
//     productPrice: number;
//     productImg: string;
//     productFrom: string;
// }

// export const BasketItems: React.FC = () => {
//     const [cart, setCart] = useState<Product[]>([]); 
//     const getProducts = useSelector((state:RootState) => state.arr.products);

//     useEffect(() => {
//         const savedCart = localStorage.getItem('cart');
//         if (savedCart) {
//             setCart(JSON.parse(savedCart));
//         }
//     }, []);

//     const handleRemoveProduct = (productName: string) => {
//         const updatedCart = cart.filter(product => product.productName !== productName);
//         setCart(updatedCart);
//         // localStorage.setItem('cart', JSON.stringify(updatedCart)); 
//     };

//     return (
//         <Container>
//           {getProducts.map((product) => (
//             <BasketCard
//               key={product.productName}
//               productName={product.productName}
//               productPrice={product.productPrice}
//               productImg={product.productImg}
//               onRemove={handleRemoveProduct}
//             />
//           ))}
//         </Container>
//       );
//     };
    
    
    const Container = styled.section`
      max-width: 1200px; 
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem; 
      padding: 1rem; 
    `;