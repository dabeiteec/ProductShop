import React from "react";

export const BasketSubtitle: React.FC = () => {

    const basketItems=3;
    return (
    <section className="flex justify-between items-center px-20 mt-8">
        <div className="flex items-end space-x-4">
            <h1 className="text-3xl font-serif">Basket</h1>
            <h6 className="font-medium">item {basketItems}</h6>
        </div>
    </section>
    );
}