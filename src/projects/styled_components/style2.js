// Adapting Based on props | Extending Styles (Component Style Inheritance) | state management | callbacks | handle user input

import styled from "@emotion/styled";
import React, { useState } from "react";

// a callback that sets the StyledButton background-color
const setIfPrimaryColor = (props) =>
  props.primary ? "lightblue" : "lightgrey";

// a callback that sets the StyledButton color
const setButtonColor = (props) => props.primary && "blue";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  gap: 1rem;
  align-items: center;
  // background-color: purple;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const StyledButton = styled.button`
  color: ${setButtonColor};
  background: white;
  border: 1px solid ${setButtonColor};
  padding: 0.5rem 5rem;
  height: 2rem;
  &: hover {
    background-color: ${setIfPrimaryColor};
  }
  box-shadow: 1px 2px 6px ${setIfPrimaryColor};
`;
const StyledButton2 = styled(StyledButton)`
  border: none;
`;

export const StyledComponents2 = (props) => {
  const [isPrimary, setIsPrimary] = useState(false);
  const titleText = [
    'Welcome to Styled Components: function("interpolation") in React',
    'Styled Components: function("interpolation")',
  ];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {isPrimary ? titleText[0] : titleText[1]}
      </h1>
      <Wrapper>
        <StyledButton
          onClick={() => {
            setIsPrimary(false);
          }}
        >
          Normal
        </StyledButton>
        <StyledButton
          primary
          onClick={() => {
            setIsPrimary(true);
          }}
        >
          Primary
        </StyledButton>
        <StyledButton2>Neumorphic</StyledButton2>
      </Wrapper>
    </>
  );
};
