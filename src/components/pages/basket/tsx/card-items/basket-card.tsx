import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

interface ShopCardProps {
    productName: string;
    productPrice: number;
    productImg: string;
    productFrom: string;
    onRemove: (productName: string) => void; // Добавляем функцию для удаления
}

export const BasketCard: React.FC<ShopCardProps> = ({
    productName,
    productPrice,
    productImg,
    productFrom,
    onRemove,
}) => {
    const [productQuantity, setProductQuantity] = useState(1);

    // Функция для расчёта итоговой цены
    const calculateFinalPrice = () => {
        return (productPrice * productQuantity).toFixed(2);
    };

    // Обработчик изменения количества
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (value > 0) {
            setProductQuantity(value);
        }
    };

    // Обработчик удаления продукта
    const handleRemove = () => {
        onRemove(productName); // Вызываем функцию удаления
    };

    return (
        <section className="p-4 bg-white rounded-lg shadow-md w-full relative flex items-center justify-between">
            <div className="flex items-center">
                <img
                    className="w-20 h-20 object-cover rounded-lg"
                    alt={productName}
                    src={productImg}
                />
                <div className="pl-4">
                    <div className="mb-1">
                        <span className="block text-lg font-semibold text-gray-800 capitalize">
                            {productName}
                        </span>
                        <span className="block text-green-600 text-xl font-bold">
                            ${productPrice} <span className="text-gray-500 text-sm">/ lb</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-right mr-8"> 
                <span className="block text-lg font-semibold text-black">${calculateFinalPrice()}</span>
                <div className="flex items-center mt-2 text-sm bg-gray-100 p-2 rounded-md">
                    <input
                        type="number"
                        value={productQuantity}
                        min="1"
                        onChange={handleQuantityChange}
                        className="w-12 text-center border rounded"
                    />
                    <FaPen className="ml-2" />
                </div>
            </div>
            <button
                className="absolute top-2 right-2 bg-red-600 p-2 rounded-full text-gray-100 hover:bg-red-700"
                onClick={handleRemove} // Обработчик удаления при клике
            >
                <FaMinus />
            </button>
        </section>
    );
};
