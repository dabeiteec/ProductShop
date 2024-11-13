import React from "react";
import { ShopSubtitle } from "../3_widgets/pages/shop/subtitle";
import { ShopMain } from "../3_widgets/pages/shop/shop-main";

export const ShopPage:React.FC = () =>{
    return (
        <main className="produce-subtitle">
            <ShopSubtitle/>
            <ShopMain/>
        </main>
    );
}