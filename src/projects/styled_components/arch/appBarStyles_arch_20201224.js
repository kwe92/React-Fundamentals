import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { GiHamburgerMenu } from "react-icons/gi";

const borderRadius = 0.25;

export const AppBar = styled.div`
  height: 56px;
  background-color: black;
  position: absolute;
  display: flex;
  flex-grow: 1;
  // width: 100vw;
  // padding: 0;
  // margin: 0;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 1px 2px 4px grey;
`;

export const StyledLogo = styled.div`
  white-space: nowrap;
  color: white;
  padding-left: 2rem;

  h4 {
    text-size-adjust: 10%;
    // font-size: 1.75rem;
    font-size: 2.33vw;
  }

  @media (max-width: 870px) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 640px) {
    display: none;
  }

  @media (min-width: 1024px) {
    gap: 4rem;
    flex-grow: 1;
  }
`;

export const BaseStyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Roboto;
  color: white;
`;

export const StyledNavLink = styled(BaseStyledNavLink)`
  // font-size: 0.75rem;
  font-size: 0.75rem;

  @media (max-width: 720px) {
    font-size: 0.5rem;
  }

  &: hover {
    color: orange;
  }
`;

export const Wrapper = styled.div`
  margin: 0rem 0rem 0rem 0rem;
  position: relative;
  background: white;
  border-radius: ${borderRadius * 2 + "rem"};
  @media (max-width: 640px) {
    width: 100%;
  }
`;
export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  border-radius: ${borderRadius + "rem"};
  align-items: center;
  width: 16rem;

  @media (max-width: 820px) {
    width: 14rem;
  }

  @media (max-width: 820px) {
    width: 10rem;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  @media (max-width: 950px) {
    width: 100%;
  }

  background: rgb(38, 38, 38);
  caret-color: white;
  &: hover {
    background: rgb(64, 64, 64);
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 2px;
  display: block;
  background: transparent;
  // padding: 0.5rem 0.5rem 0.5rem 0rem;
  padding: 6px 6px 6px 0px;

  &: focus {
    border: none;
    // background: rgba(255, 0, 0, 0.1);
    outline: none;
  }
`;

export const StyledAccountCircle = styled(AccountCircle)`
  color: white;
  margin-right: 3rem;
  font-size: 2rem;

  @media (max-width: 450px) {
    margin-right: 1rem;
  }
`;

export const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
  color: white;
  display: none;
  font-size: 2rem;
  @media (max-width: 450px) {
    padding: 0rem 1rem;
    display: inline;
  }
`;
