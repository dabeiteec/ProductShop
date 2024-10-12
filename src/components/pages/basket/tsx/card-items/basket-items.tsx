import React from "react";
import{ BasketCard } from './basket-card.js'
import database from '../../../../../types/database.js'

export const BasketItems: React.FC = () => {
    
    return (
        <section className="produce-subtitle container mx-auto  flex flex-col gap-6 p-4">
            {Object.keys(database).map((key) => (
                <BasketCard
                    key={key}
                    productName={database[key].name}
                    productPrice={database[key].price}
                    productImg={database[key].img} 
                    productFrom={database[key].description}
                />
                ))}
            </section>
    );
};
