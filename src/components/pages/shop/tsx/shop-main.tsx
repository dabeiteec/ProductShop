import React from "react";
import{ShopCard} from './card'
import database from '../../../../types/database.js'

export const ShopMain: React.FC = () => {
    
    return (
        <section className="produce-subtitle container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {Object.keys(database).map((key) => (
                <ShopCard
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
