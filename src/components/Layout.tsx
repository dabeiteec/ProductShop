// import { useState,useEffect,useRef } from 'react'
import { Header } from './global/tsx/header';
import { HomePage } from './pages/home/home';
import {ShopPage } from './pages/shop/shop'
import { Route, Routes } from "react-router-dom";
  
export const Layout:React.FC=()=> {
  return (
    <div>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
    </div>
    )
  } 