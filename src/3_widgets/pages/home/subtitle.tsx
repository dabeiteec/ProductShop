import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../../../6_shared/text/titles";
import { myGreen,myWhite,myHoverWhite } from "../../../6_shared/colors";
import { Inter } from "../../../6_shared/text/font-family";

export const Subtitle: React.FC = () => {
  // TODO сделать курсивом некоторые слова по макету из фигмы
  const subtitleText = 'We’re farmers, purveyors, and eaters of organically grown food'
  return (
    <SubtitleContainer>
      <Title label={subtitleText}>
      </Title>
      <StyledLink to="/shop">Browse our shop</StyledLink>
    </SubtitleContainer>
  );
};

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  max-width: 36rem; 
`;


const StyledLink = styled(Link)`
  background-color: ${myGreen};
  color: ${myWhite};
  font-family:${Inter};
  font-weight:600;
  font-size:20;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 0.375rem;
  display: inline-block;
  margin-top: 1rem;
  &:hover {
    color: ${myHoverWhite};
  }
`;
