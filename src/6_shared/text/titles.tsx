import React from "react";
import styled from "styled-components";
import { NewsReader } from "./font-family";
import { myGreen, myHoverGreen,myBlack } from "../colors";

interface TitleProp {
  label: React.ReactNode;
}

export const Title: React.FC<TitleProp> = ({ label }) => {
  return <StyledTitle>{label}</StyledTitle>;
};

export const Logo: React.FC<TitleProp> = ({ label }) => {
  return <StyledLogo>{label}</StyledLogo>;
};

const BaseText = styled.h1`
  font-family: ${NewsReader}, serif;
  &:hover {
    color: ${myHoverGreen};
    /*TODO filter:drop-shadow(rgb) ; */
  }
`;

const StyledTitle = styled(BaseText)`
  font-size: 64px;
  font-weight: 400;
  color:${myBlack};
`;

const StyledLogo = styled(BaseText)`
  font-size: 32px;
  font-weight: 500;
  color: ${myGreen};
`;
