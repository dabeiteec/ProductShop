import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Subtitle: React.FC = () => {
  return (
    <SubtitleContainer>
      <SubtitleText>
        We’re farmers, purveyors, and eaters of organically grown food.
      </SubtitleText>
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
  max-width: 36rem; /* max-w-xl */
`;

const SubtitleText = styled.h1`
  font-size: 2.25rem; /* text-6xl */
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-900 */
`;

const StyledLink = styled(Link)`
  background-color: #34d399; /* green button */
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.375rem;
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    background-color: #2bbf77; /* darker green on hover */
  }
`;
