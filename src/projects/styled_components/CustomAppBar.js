import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import * as styles from "./appBarStyles";

const pages = [
  { label: "MOVIES", route: "" },
  { label: "TV SHOWS", route: "bigMind" },
  { label: "TRENDING", route: "void" },
  { label: "PRICING", route: "pricing" },
];

const buttonLinks = pages.map((page) => {
  return (
    <styles.StyledNavLink to={page.route}>{page.label}</styles.StyledNavLink>
  );
});

export const StyledAppBar = () => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    const input = event.target.value;
    setUserInput(input);
  };

  const Menu = <styles.StyledGiHamburgerMenu></styles.StyledGiHamburgerMenu>;

  const Logo = (
    <styles.StyledLogo>
      <styles.BaseStyledNavLink to="">
        <h4 name="title">VueMix</h4>
      </styles.BaseStyledNavLink>
    </styles.StyledLogo>
  );

  const Links = (
    <styles.NavLinkContainer>{buttonLinks}</styles.NavLinkContainer>
  );

  const InputContainer = (
    <styles.Wrapper>
      <styles.StyledInputContainer>
        <AiOutlineSearch
          style={{ paddingLeft: "0.5rem", color: "white" }}
        ></AiOutlineSearch>
        <styles.StyledInput
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleUserInput}
          value={userInput}
        ></styles.StyledInput>
      </styles.StyledInputContainer>
    </styles.Wrapper>
  );

  const CustomSwitch = (
    <div style={{ flexGrow: 1, paddingLeft: "1rem" }}>
      {/* Switch Start */}
      <FormGroup>
        <FormControlLabel
          control={<Switch onClick={() => {}} size="small" />}
          label={
            <Typography style={{ color: "white", fontSize: "0.75rem" }}>
              Mode
            </Typography>
          }
        />
      </FormGroup>
    </div>
  );

  const CustomAccountCircle = <styles.StyledAccountCircle />;

  return (
    <styles.AppBar>
      {Menu}
      {/* Logo Start */}
      {Logo}
      {/* NavLinks Start */}
      {Links}
      {/* Search Icon && Input Start */}
      {InputContainer}
      {/* Switch Start */}
      {CustomSwitch}
      {/* Account Circle */}
      {CustomAccountCircle}
    </styles.AppBar>
  );
};
