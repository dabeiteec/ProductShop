// import { useState,useEffect,useRef } from 'react'
import { Header } from './global/tsx/header';
// import { HomePage } from './pages/home/home';
import {ShopPage } from './pages/shop/shop'
export const Layout:React.FC=()=> {
    // const [login, setLogin] = useState('');

  return (
   <div>
        <Header/>
        <ShopPage/>
   </div>
  )
} 