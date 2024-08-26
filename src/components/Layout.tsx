// import { useState,useEffect,useRef } from 'react'
import { Header } from './global/tsx/header';
import { HomePage } from './pages/home/home';
export const Layout:React.FC=()=> {
    // const [login, setLogin] = useState('');

  return (
   <div>
        <Header/>
        <HomePage/>
   </div>
  )
} 