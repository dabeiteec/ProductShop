import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../../../6_shared/text/titles";
import { GreenButton, DefaultButton } from "../../../6_shared/button";
import { SubtitleSmall } from "../../../6_shared/text/styled-text";

export const ShopSubtitle: React.FC = () => {

  const [activeSort, setActiveSort] = useState<string>("Default");
  const buttons = [
    { label: "Default", type: "Default" },
    { label: "A-Z", type: "A-Z" },
    { label: "List view", type: "List view" },
  ];

  return (
    <Section>
      <LeftContainer>
        <Title label="Produce" />
        <DateInfo>
          <SubtitleSmall>
            <b>Fresh</b>
          </SubtitleSmall>
          <SubtitleSmall>— August 21, 2023</SubtitleSmall>
        </DateInfo>
      </LeftContainer>
      
      <ButtonContainer>
        {buttons.map((button) => (
          activeSort === button.type ? (
            <GreenButton
              key={button.type}
              label={button.label}
              onClick={() => setActiveSort(button.type)}
              fontSize={16}
              borderRadius="20px"
            />
          ) : (
            <DefaultButton
              key={button.type}
              label={button.label}
              onClick={() => setActiveSort(button.type)}
              fontSize={16}
              borderRadius="20px"
            />
          )
        ))}
      </ButtonContainer>
    </Section>
  );
};

// Стили

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5rem;
  margin-top: 2rem;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
