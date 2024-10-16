import React, { useEffect, useState } from "react";
import { BasketCard } from './basket-card.js';

// Определяем интерфейс для продукта
interface Product {
    productName: string;
    productPrice: number;
    productImg: string;
    productFrom: string;
}

export const BasketItems: React.FC = () => {
    const [cart, setCart] = useState<Product[]>([]); // Указываем тип состояния как массив Product

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Функция для удаления продукта из корзины
    const handleRemoveProduct = (productName: string) => {
        const updatedCart = cart.filter(product => product.productName !== productName);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Сохраняем обновлённую корзину в LocalStorage
    };

    return (
        <section className="produce-subtitle container mx-auto flex flex-col gap-6 p-4">
            {cart.map((product) => (
                <BasketCard
                    key={product.productName} // Используем productName как уникальный ключ
                    productName={product.productName}
                    productPrice={product.productPrice}
                    productImg={product.productImg} 
                    productFrom={product.productFrom}
                    onRemove={handleRemoveProduct} // Передаём функцию удаления
                />
            ))}
        </section>
    );
};
