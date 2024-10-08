import { useState } from 'react';
import { NavButton } from './nav-button';
import '../css/header.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';
import { ShopPage } from '../../pages/shop/shop';
import { BasketPage } from '../../pages/basket/basket';

export const Header: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <header className="header h-[100px]">
      <div className="logo">World Peas</div>
      <nav className="nav">
        <NavButton
          label="Shop"
          to="/shop"
          isActive={activeTab === '/shop'}
          onClick={() => handleClick('/shop')}
        />
        <NavButton
          label="Who we are"
          to="/"
          isActive={activeTab === '/'}
          onClick={() => handleClick('/')}
        />
        <NavButton
          label="Newstand"
          to="/news"
          isActive={activeTab === '/news'}
          onClick={() => handleClick('/news')}
        />
        <NavButton
          label="My profile"
          to="/profile"
          isActive={activeTab === '/profile'}
          onClick={() => handleClick('/profile')}
        />
        <NavButton
          label="Basket"
          to="/basket"
          isActive={activeTab === '/basket'}
          onClick={() => handleClick('/basket')}
        />
      </nav>
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </header>
  );
};
