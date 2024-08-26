import React from "react";

export const ShopSubtitle: React.FC = () => {
    return (
    <section className="flex justify-between items-center px-20 mt-8">
        <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-serif">Produce</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
            <h6 className="font-medium">Fresh</h6>
            <span className="text-gray-400">— August 21, 2023</span>
        </div>
        </div>
        <div className="flex space-x-2">
        <button className="bg-green-800 text-white px-4 py-2 rounded-full focus:outline-none">
            Default
        </button>
        <button className="border border-gray-300 text-black px-4 py-2 rounded-full focus:outline-none">
            A-Z
        </button>
        <button className="border border-gray-300 text-black px-4 py-2 rounded-full focus:outline-none">
            List view
        </button>
        </div>
    </section>
    );
}