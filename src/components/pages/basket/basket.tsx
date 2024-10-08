import React from "react";
import { BasketSubtitle } from "./tsx/subtitle";

export const BasketPage: React.FC = () => {
    
    return (
        <section className="produce-subtitle container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
           <BasketSubtitle/>
        </section>
    );
};
