import React from "react";
import{ShopCard} from './card'
import database from '../../../../types/database.json'

export const ShopMain: React.FC = () => {
    const products = database.product;

    return (
        <section className="produce-subtitle container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {Object.keys(products).map((key) => (
                <ShopCard
                    key={key}
                    productName={products[key].name}
                    productPrice={products[key].price}
                    productImg={products[key].img}
                    productFrom={products[key].description}
                />
                ))}
            </section>
    );
};
