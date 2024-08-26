import { useState,useEffect,useRef } from 'react'

export const Header:React.FC=()=> {
  const [login, setLogin] = useState('');

  return (
    <header className="header">
    <h2 className="logo">World Peas</h2>
    <ul className="header_list">
      <li>
        <button className="outline_button header-list-text">Shop</button>
      </li>
      <li>
        <button className="outline_button header-list-text">Newstand</button>
      </li>
      <li>
        <button className="outline_button header-list-text">
          Who we are
        </button>
      </li>
      <li>
        <button className="outline_button header-list-text">
          My profile
        </button>
      </li>
      <li>
        <button className="green-button green-button-for-header header-list-text">
          Basket
        </button>
      </li>
    </ul>
  </header>
  )
}