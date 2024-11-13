// NavButton.tsx
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  to: string;
}


export const NavButton: React.FC<NavButtonProps> = ({ label, isActive, onClick, to }) => {
  return (
    <StyledNavLink to={to} isActive={isActive} onClick={onClick}>
      {label}
    </StyledNavLink>
  );
};
const StyledNavLink = styled(NavLink)<{ isActive: boolean }>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  color: ${({ isActive }) => (isActive ? 'white' : '#4a4a4a')};
  background-color: ${({ isActive }) => (isActive ? '#2f855a' : 'transparent')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#276749' : '#f7fafc')};
  }
`;