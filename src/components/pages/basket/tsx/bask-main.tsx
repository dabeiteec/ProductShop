import React from "react";
import{ BasketItems } from './card-items/basket-items.js'
import { OrderSummary } from "./calculate.js";

export const BasketMain: React.FC = () => {
    
    return (
        <section className="container mx-auto flex flex-row gap-6 p-4">
        <div className="w-3/4">
            <BasketItems />
        </div>
        <div className="w-1/4">
            <OrderSummary />
        </div>
    </section>
    );
};
