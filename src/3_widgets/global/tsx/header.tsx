import React, { useMemo } from 'react';
import { NavButton } from '../../../6_shared/nav-button';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../6_shared/redux/redux-store';

export const Header: React.FC = () => {
  // Извлекаем количество товаров в корзине из Redux, это будет триггерить только ререндер кнопки корзины
  const basketCount = useSelector((state: RootState) => state.arr.productAmount);

  const headerLabels = ['Shop', 'Who we are', 'Newstand', 'My Profile'];
  const headerLinks = ['/shop', '/', '/notFound', '/basket'];

  // Мемоизируем кнопку "Basket", чтобы она ререндерилась только при изменении basketCount
  const basketButton = useMemo(
    () => (
      <NavButton
        label={`Basket (${basketCount})`}
        to={headerLinks[3]}
      />
    ),
    [basketCount] // кнопка пересоздается только при изменении basketCount
  );

  return (
    <StyledHeader>
      <Logo>World Peas</Logo>
      <Navbar>
        <NavButton label={headerLabels[0]} to={headerLinks[0]} />
        <NavButton label={headerLabels[1]} to={headerLinks[1]} />
        <NavButton label={headerLabels[2]} to={headerLinks[2]} />
        
        {/* Рендерим мемоизированную кнопку "Basket" */}
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
`;

const Logo = styled.header`
  font-size: 1.875rem;
  font-family: serif; 
  color: #2f855a;
`;

const Navbar = styled.header` 
  display: flex;
  gap: 2rem; 
  font-size: 1.125rem; 
`;
