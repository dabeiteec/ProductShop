import React from "react";
import { ShopSubtitle } from "./tsx/subtitle";
import { ShopMain } from "./tsx/shop-main";

export const ShopPage:React.FC = () =>{
    return (
        <main className="produce-subtitle">
            <ShopSubtitle/>
            <ShopMain/>
        </main>
    );
}