import React from 'react';
import '../css/nav-button.scss'; 

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`nav-button ${isActive ? 'active' : 'inactive'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}