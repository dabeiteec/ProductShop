import React from "react";
import styled from "styled-components";
import { Title } from "../6_shared/text/titles";
import { myGreen } from "../6_shared/colors";

const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundText = styled(Title)`
  color: ${myGreen};
`;

export const NotFound: React.FC = () => {
  return (
    <NotFoundWrapper>
      <NotFoundText label="Not Found"/>
    </NotFoundWrapper>
  );
};
