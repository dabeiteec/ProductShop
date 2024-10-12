import React from "react";
import { BasketSubtitle } from "./tsx/subtitle";
import { BasketMain } from "./tsx/bask-main";

export const BasketPage: React.FC = () => {
    return (
        <section className="produce-subtitle container mx-auto flex flex-col gap-6 p-4">
            <BasketSubtitle />
            <BasketMain />
        </section>
    );
};
