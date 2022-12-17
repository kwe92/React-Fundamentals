import React, { useState } from "react";
import styled from "@emotion/styled";

// Styled Components
//    - A way to style React components
//    - Utilises tagged templete literals (all tagged template literal rules apply) to style your components
//    - Removes the mapping between components and styles,
//    - meaning that when you are defining your styles,
//    - you are in turn creating a React component that has your styles attached to it
//    - as a custom generated class name

const setStyleBackgroundColor = (props) =>
  props.mode ? "papayawhip" : "black";

// Create a React Quote component that will render a h2 tag
// with css styles attached via template literals

const Quote = styled.h2`
  font-size: 3rem;
  color: ${(props) => (props.mode ? "black" : "white")};
`;

// Create a React Wrapper component that will render a div tag
// with css styles attached via template literals

const Wrapper = styled.div`
  padding: 4px;
  background-color: ${setStyleBackgroundColor};
  text-align: center;
`;

// Create a React StyledButton component  that will render a button tag
// with css styles attached via template literals

const StyledButton = styled.button`
  color: grey;
  background: white;
  padding: 0.25rem 1rem;
  margin-bottom: 1rem;
  border: 2px solid grey;
  &:hover {
    color: tan;
    border: 2px solid tan;
  }
`;

// User Quote, Wrapper, and StyledButton
// like any other React component (Custom HTML tag / element)

const StyledComponents1 = () => {
  const [mode, setMode] = useState(true);
  return (
    <>
      <Wrapper mode={mode}>
        <Quote mode={mode}>Begin, to begin is half the work.</Quote>
        <StyledButton
          onClick={() => {
            setMode(!mode);
          }}
        >
          Color
        </StyledButton>
      </Wrapper>
    </>
  );
};

export default StyledComponents1;
