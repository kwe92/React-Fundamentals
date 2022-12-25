import React from "react";
import { NavBar } from "./NavBar";
import { Container, Link } from "./CustomElements";

export const Header = (props) => {
  return (
    <Container className={"nav-area"}>
      <Link href={"/"} className={"logo"}>
        Logo
      </Link>
      <NavBar />
    </Container>
  );
};
