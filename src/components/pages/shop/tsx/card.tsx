import React from "react";
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
    console.log(productName,productImg)
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
        <button className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-full">
            <FaPlus />
        </button>
        </section>
    );
};
