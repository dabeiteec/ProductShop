import React, { useEffect, useState } from "react";
import { BasketCard } from './basket-card.js';

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
        <section className="produce-subtitle container mx-auto flex flex-col gap-6 p-4">
            {cart.map((product) => (
                <BasketCard
                    key={product.productName} 
                    productName={product.productName}
                    productPrice={product.productPrice}
                    productImg={product.productImg} 
                    onRemove={handleRemoveProduct}
                />
            ))}
        </section>
    );
};
