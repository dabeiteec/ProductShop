import React from "react";
import '../../../global/css/button.scss'
import '../css/subtitle.scss'
import {ShopPage} from'../../shop/shop'

export const Subtitle:React.FC=()=> {
    return (
        <div className="subtitle">
            <h1 className="subtitle-text">
            We’re farmers, purveyors, and eaters of organically grown food.
            </h1>
            <a href={<ShopPage/>} className="green-button">
                Browse our shop
            </a>
        </div>
    );
}