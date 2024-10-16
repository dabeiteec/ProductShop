import React, { useState, useEffect } from "react"; 
import { FaPlus } from "react-icons/fa6";

interface ShopCardProps {
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
    const [cart, setCart] = useState(() => {
        // Получаем начальное значение корзины из LocalStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Сохраняем корзину в LocalStorage каждый раз, когда она изменяется
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Функция для добавления продукта в корзину
    const addToCart = () => {
        const newProduct = {
            productName,
            productPrice,
            productImg,
            productFrom,
        };

        // Проверяем, есть ли уже этот продукт в корзине
        const isProductInCart = cart.some(product => product.productName === productName);

        if (!isProductInCart) {
            setCart((prevCart) => [...prevCart, newProduct]);
        } else {
            alert('Этот продукт уже в корзине!'); // или любое другое сообщение
        }
    };

    return (
        <section className="p-4 bg-white rounded-lg shadow-md max-w-xs relative">
            <div className="produce-card">
                <img
                    className="w-full h-48 object-cover rounded-t-lg"
                    alt={productName}
                    src={productImg} 
                />
                <div className="p-4">
                    <div className="mb-2">
                        <span className="block text-lg font-semibold text-gray-800 capitalize">
                            {productName}
                        </span>
                        <span className="block text-green-600 text-xl font-bold">
                            ${productPrice} <span className="text-gray-500 text-sm">/ lb</span>
                        </span>
                    </div>
                    <span className="block text-sm text-gray-500">{productFrom}</span>
                </div>
            </div>
            {/* Кнопка для добавления в корзину */}
            <button
                className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-full"
                onClick={addToCart} // Добавляем продукт при клике
            >
                <FaPlus />
            </button>
        </section>
    );
};
