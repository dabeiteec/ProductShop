import React, { useState, useMemo } from 'react';
// TODO import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ModalWindow from './Form';
import { FaUser } from "react-icons/fa";
import { myGreen } from '../../../6_shared/colors';
// TODO import { RootState } from '../../../6_shared/redux/redux-store';
import { Logo } from '../../../6_shared/text/titles';
import { NavButton } from '../../../6_shared/nav-button';

export const Header: React.FC = () => {
  //TODO const basketCount = useSelector((state: RootState) => state.arr.productAmount);
  const headerLabels = ['Shop', 'Who we are', 'Newstand', 'My Profile'];
  const headerLinks = ['/shop', '/', '/notFound', '/basket'];
  
  const basketButton = useMemo(
    () => (
      <NavButton
        label={`Basket (${1})`}
        to={headerLinks[3]}
      />
    ),
    [1]
  );

  const [isActiveModal, setISActiveModal] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [formTypeStatus, setFormType] = useState(true);

  const handlePopUp = () => {
    setIsPopUp(!isPopUp);
  };
  const closeModal = () => {
    setISActiveModal(false);
  };
  return (
    <StyledHeader>
      <Logo label='World Peas' />
      <Navbar>
        <NavButton label={headerLabels[0]} to={headerLinks[0]} />
        <NavButton label={headerLabels[1]} to={headerLinks[1]} />
        <NavButton label={headerLabels[2]} to={headerLinks[2]} />
        {basketButton} 
        <UserIconContainer>
          <CustomUserIcon onClick={handlePopUp} />
          {isPopUp && (
            <PopUpWindow>
              <span onClick={() => { setISActiveModal(true); setFormType(false); }}>sign in</span>
              <span onClick={() => { setISActiveModal(true); setFormType(true); }}>registration</span>
            </PopUpWindow>
          )}
          <ModalWindow isOpen={isActiveModal} onClose={closeModal} formType={formTypeStatus} />
        </UserIconContainer>
      </Navbar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  background-color: #ffffff;
  z-index: 10;
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
    width: 100%;
    gap: 1rem;
    justify-content: space-evenly;
  }
`;

const UserIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 120px;
  position: relative; /* Для правильной позиционирования PopUp */
`;

const CustomUserIcon = styled(FaUser)`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${myGreen};
`;

const PopUpWindow = styled.div`
  display: flex;
  position: absolute;
  top: 3rem;
  background-color: white;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 20;
  gap: 1rem;
  flex-direction: column;
  cursor: pointer;

  span {
    padding: 5px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
