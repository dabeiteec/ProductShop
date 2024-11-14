import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  label: string;
  // TODOisActive: boolean;
  // onClick?: () => void;
  to: string;
}

// TODO const NavButton: React.FC<NavButtonProps> = ({ label,isActive , onClick, to }) => {
  export const NavButton: React.FC<NavButtonProps> = ({ label , to }) => {
  return (
    //TODO <StyledNavLink to={to} onClick={onClick} isActive={isActive}>
    <StyledNavLink to={to}  >
      {label}
    </StyledNavLink>
  );
};

const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  color: gray;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color:green;
  }

  &.active {
    color: white;
    background-color: #2f855a;
  }
`;
// const StyledNavLink = styled(NavLink)<{ isActive: boolean }>`
//   display: inline-flex;
//   padding: 0.5rem 1rem;
//   font-weight: 600;
//   border-radius: 0.5rem;
//   color: ${({ isActive }) => (isActive ? 'white' : '#4a4a4a')};
//   background-color: ${({ isActive }) => (isActive ? '#2f855a' : 'transparent')};
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: ${({ isActive }) => (isActive ? '#276749' : '#f7fafc')};
//   }

//   /* Стили для активной ссылки с использованием класса active */
//   &.active {
//     color: white;
//     background-color: #2f855a;
//   }
// `;
