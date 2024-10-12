import { NotFound } from './pages/NotFound/not-found-page';
import { Header } from './global/tsx/header';
import { HomePage } from './pages/home/home';
import {ShopPage } from './pages/shop/shop';
import { BasketPage } from './pages/basket/basket';
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