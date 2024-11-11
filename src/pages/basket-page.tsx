import React from "react";
import { BasketSubtitle } from "../widgets/pages/basket/subtitle";
import { BasketMain } from "../widgets/pages/basket/bask-main";

export const BasketPage: React.FC = () => {
    return (
        <section className="produce-subtitle container mx-auto flex flex-col gap-6 p-4">
            <BasketSubtitle />
            <BasketMain />
        </section>
    );
};
