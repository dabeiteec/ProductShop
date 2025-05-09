import React from 'react';
import styled from 'styled-components';

import { myGreen, myHoverGreen, myWhite, myHoverWhite, myBlack, myGray } from './colors';
import { Inter } from './text/font-family';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  fontSize?: number;
  borderRadius?: string;
  element?: JSX.Element;
}

export const GreenButton: React.FC<ButtonProps> = ({ label, onClick, fontSize, borderRadius, element }) => {
  return (
    <StyledGreenButton onClick={onClick} fontSize={fontSize} borderRadius={borderRadius}>
      {label}
      {element && element}
    </StyledGreenButton>
  );
};

export const DefaultButton: React.FC<ButtonProps> = ({ label, onClick, fontSize, borderRadius }) => {
  return (
    <StyledDefaultButton onClick={onClick} fontSize={fontSize} borderRadius={borderRadius}>
      {label}
    </StyledDefaultButton>
  );
};

interface BaseButtonProps {
  fontSize?: number;
  borderRadius?: string;
}

const BaseButton = styled(({ fontSize, borderRadius, ...props }: BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} />
))<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-family: ${Inter}, serif;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: ${(props) => props.borderRadius || '0.25rem'};
`;

const StyledGreenButton = styled(BaseButton)`
  color: ${myWhite};
  background-color: ${myGreen};

  &:hover {
    color: ${myHoverWhite};
    background-color: ${myHoverGreen};
  }
`;

const StyledDefaultButton = styled(BaseButton)`
  color: ${myBlack};
  background-color: transparent;
  border: 1px ${myGray} solid;

  &:hover {
    color: ${myHoverWhite};
    background-color: ${myHoverGreen};
  }
`;
