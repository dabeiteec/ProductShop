import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav-button.scss';

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  to: string; // Пропс для ссылки
}

export const NavButton: React.FC<NavButtonProps> = ({ label, isActive, onClick, to }) => {
  return (
    <Link to={to} className="green-button">
      <button
        className={`nav-button ${isActive ? 'active' : 'inactive'}`}
        onClick={onClick}
      >
        {label}
      </button>
    </Link>
  );
};
