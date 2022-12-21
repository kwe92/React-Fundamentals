import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";

const AppBar = styled.div`
  height: 56px;
  background-color: black;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 1px 2px 4px grey;
`;

const StyledLogo = styled.div`
  white-space: nowrap;
  xs: none;
  sm: block;
`;

const pages = [
  { label: "MOVIES", route: "" },
  { label: "TV SHOWS", route: "tvshows" },
  { label: "TRENDING", route: "trending" },
  { label: "PRICING", route: "pricing" },
];

export const StyledComponents3 = () => {
  return (
    <AppBar>
      <GiHamburgerMenu
        style={{ color: "white", padding: "0rem 0.5rem" }}
      ></GiHamburgerMenu>
      <StyledLogo>
        <h4 style={{ color: "white" }}>VueMix</h4>
      </StyledLogo>

      <div></div>
    </AppBar>
  );
};
