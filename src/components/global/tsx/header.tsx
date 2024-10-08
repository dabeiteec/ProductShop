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

  const headerLabels=['Shop','Who we are','Newstand','My Profile','Basket']
  ;
  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <header className="header h-[100px]">
      <div className="logo">World Peas</div>
      <nav className="nav">
        <NavButton
          label={headerLabels[0]}
          to="/shop"
          isActive={activeTab === '/shop'}
          onClick={() => handleClick('/shop')}
        />
        <NavButton
          label={headerLabels[1]}
          to="/"
          isActive={activeTab === '/'}
          onClick={() => handleClick('/')}
        />
        <NavButton
          label={headerLabels[2]}
          to="/news"
          isActive={activeTab === '/news'}
          onClick={() => handleClick('/news')}
        />
        <NavButton
          label={headerLabels[3]}
          to="/profile"
          isActive={activeTab === '/profile'}
          onClick={() => handleClick('/profile')}
        />
        <NavButton
          label={headerLabels[4]}
          to="/basket"
          isActive={activeTab === '/basket'}
          onClick={() => handleClick('/basket')}
        />
      </nav>
    </header>
  );
};
