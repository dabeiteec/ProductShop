import React from 'react';
import styled from 'styled-components';

// Экспортируем цвета для использования в других местах
import { myGreen, myHoverGreen, myWhite, myHoverWhite,myBlack } from './colors';


interface ButtonProps {
  label: string;
  onClick?: () => void;
  fontSize?: number; // Проп для изменения размера шрифта
}

// Кнопка зеленая
export const GreenButton: React.FC<ButtonProps> = ({ label, onClick, fontSize }) => {
  return (
    <StyledGreenButton onClick={onClick} fontSize={fontSize}>
      {label}
    </StyledGreenButton>
  );
};

// Кнопка по умолчанию
export const DefaultButton: React.FC<ButtonProps> = ({ label, onClick, fontSize }) => {
  return (
    <StyledDefaultButton onClick={onClick} fontSize={fontSize}>
      {label}
    </StyledDefaultButton>
  );
};

// Стилизация зеленой кнопки
const StyledGreenButton = styled.button<{ fontSize?: number }>`
  display: inline-flex;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')}; // Размер шрифта по умолчанию 16px
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: ${myWhite};
  background-color: ${myGreen}; // Используем переменную для зеленого цвета
  transition: background-color 0.3s;
  
  &:hover {
    color: #dbdbdb;
    background-color: ${myHoverGreen}; // Используем переменную для hover эффекта
  }
`;

// Стилизация кнопки по умолчанию
const StyledDefaultButton = styled.button<{ fontSize?: number }>`
  display: inline-flex;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')}; // Размер шрифта по умолчанию 16px
  font-weight: 600;
  padding: 0.5rem 1rem;
  color: ${myBlack};
  background-color: transparent;
  transition: background-color 0.3s;
  
  &:hover {
    color:  ${myHoverWhite};
    background-color: ${myHoverGreen}; // Используем переменную для hover эффекта
  }
`;
