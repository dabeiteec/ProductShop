import { NotFound } from '../../pages/not-found-page';
import { Header } from '../../3_widgets/global/tsx/header';
import { HomePage } from '../../pages/home-page';
import {ShopPage } from '../../pages/shop-page';
import { BasketPage } from '../../pages/basket-page';
import { Route, Routes } from "react-router-dom";
  
export const Layout:React.FC=()=> {
  return (
    <div>
          <Header/>
          
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path = "/notFound" element = {<NotFound/>}/>
            <Route path="/shop" element = {<ShopPage />} />
            <Route path="/basket" element = {<BasketPage/>}/>
          </Routes>
    </div>
    )
  } 