import React, { useMemo } from 'react';
import { NavButton } from '../../../6_shared/nav-button';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../6_shared/redux/redux-store';
import { Logo } from '../../../6_shared/text/titles';

export const Header: React.FC = () => {
  const basketCount = useSelector((state: RootState) => state.arr.productAmount);

  const headerLabels = ['Shop', 'Who we are', 'Newstand', 'My Profile'];
  const headerLinks = ['/shop', '/', '/notFound', '/basket'];

  const basketButton = useMemo(
    () => (
      <NavButton
        label={`Basket (${basketCount})`}
        to={headerLinks[3]}
      />
    ),
    [basketCount] 
  );

  return (
    <StyledHeader>
      <Logo label='World Peas'/>
      <Navbar>
        <NavButton label={headerLabels[0]} to={headerLinks[0]} />
        <NavButton label={headerLabels[1]} to={headerLinks[1]} />
        <NavButton label={headerLabels[2]} to={headerLinks[2]} />
        {basketButton}
      </Navbar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #ffffff;
  @media (max-width: 710px) {
    & > h1 {
      display: none;
    }
  }
`;

const Navbar = styled.header` 
  display: flex;
  gap: 2rem; 
  @media (max-width: 710px) {
    width:100%;
    gap:1rem;
    justify-content:space-evenly
  }
`;
