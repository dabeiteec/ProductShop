import { useState } from 'react';
import { NavButton } from './nav-button';
import '../css/header.scss';

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Basket');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <header className="header h-[100px]">
      <div className="logo">
        World Peas
      </div>
      <nav className="nav">
        <NavButton
          label="Shop"
          isActive={activeTab === 'Shop'}
          onClick={() => handleClick('Shop')}
        />
        <NavButton
          label="Newstand"
          isActive={activeTab === 'Newstand'}
          onClick={() => handleClick('Newstand')}
        />
        <NavButton
          label="Who we are"
          isActive={activeTab === 'Who we are'}
          onClick={() => handleClick('Who we are')}
        />
        <NavButton
          label="My profile"
          isActive={activeTab === 'My profile'}
          onClick={() => handleClick('My profile')}
        />
        <NavButton
          label="Basket"
          isActive={activeTab === 'Basket'}
          onClick={() => handleClick('Basket')}
        />
      </nav>
    </header>
  );
}
