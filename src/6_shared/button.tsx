import React from 'react';
import styled from 'styled-components';

import { myGreen, myHoverGreen, myWhite, myHoverWhite,myBlack } from './colors';
interface ButtonProps {
  label: string;
  onClick?: () => void;
  fontSize?: number; 
}

export const GreenButton: React.FC<ButtonProps> = ({ label, onClick, fontSize }) => {
  return (
    <StyledGreenButton onClick={onClick} fontSize={fontSize}>
      {label}
    </StyledGreenButton>
  );
};

export const DefaultButton: React.FC<ButtonProps> = ({ label, onClick, fontSize }) => {
  return (
    <StyledDefaultButton onClick={onClick} fontSize={fontSize}>
      {label}
    </StyledDefaultButton>
  );
};

const StyledGreenButton = styled.button<{ fontSize?: number }>`
  display: inline-flex;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')}; 
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: ${myWhite};
  background-color: ${myGreen}; 
  transition: background-color 0.3s;
  
  &:hover {
    color: #dbdbdb;
    background-color: ${myHoverGreen}; 
  }
`;

const StyledDefaultButton = styled.button<{ fontSize?: number }>`
  display: inline-flex;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')}; 
  font-weight: 600;
  padding: 0.5rem 1rem;
  color: ${myBlack};
  background-color: transparent;
  transition: background-color 0.3s;
  
  &:hover {
    color:  ${myHoverWhite};
    background-color: ${myHoverGreen}; 
  }
`;
