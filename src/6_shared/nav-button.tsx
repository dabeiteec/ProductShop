import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { myGreen,myWhite,myBlack,myHoverWhite } from './colors';
import { Inter } from './text/font-family';
interface NavButtonProps {
  label: string;
  to: string;
}

  export const NavButton: React.FC<NavButtonProps> = ({ label , to }) => {
  return (
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
  color: ${myBlack};
  background-color: transparent;
  transition: background-color 0.3s;
  font-size:16px;
  font-family:${Inter};
  font-weight:400;
  text-decoration: none;
  white-space: nowrap;
  &:hover.active{
    color:${myHoverWhite};
  }
  &.active {
    color: ${myWhite};
    background-color: ${myGreen};
    font-weight:600;
  }
`;
