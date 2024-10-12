import { useState } from 'react';
import { NavButton } from './nav-button';
import '../css/header.scss';
import { Route, Routes, useLocation } from 'react-router-dom';


export const Header: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const headerLabels = ['Shop','Who we are','Newstand','My Profile','Basket'];
  const headerLinks = ['/shop','/','/notFound','/basket']
  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <header className="header h-[100px]">
      <div className="logo">World Peas</div>
      <nav className="nav">
        <NavButton
          label={headerLabels[0]}
          to={headerLinks[0]}
          isActive={activeTab === '/shop'}
          onClick={() => handleClick('/shop')}
        />
        <NavButton
          label={headerLabels[1]}
          to={headerLinks[1]}
          isActive={activeTab === '/'}
          onClick={() => handleClick('/')}
        />
        <NavButton
          label={headerLabels[2]}
          to={headerLinks[2]}
          isActive={activeTab === '/news'}
          onClick={() => handleClick('/news')}
        />
        <NavButton
          label={headerLabels[3]}
          to={headerLinks[2]}
          isActive={activeTab === '/profile'}
          onClick={() => handleClick('/profile')}
        />
        <NavButton
          label={headerLabels[4]}
          to={headerLinks[3]}
          isActive={activeTab === '/basket'}
          onClick={() => handleClick('/basket')}
        />
      </nav>
    </header>
  );
};
