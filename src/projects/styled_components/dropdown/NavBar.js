import React from "react";
import { menuItems } from "./Items";
import { MenuItem } from "./MenuItem";
export const NavBar = (props) => {
  const items = menuItems.map((menu, index) => {
    return <MenuItem item={menu} key={index}></MenuItem>;
  });

  return (
    <nav>
      <ul className="menus">{items}</ul>
    </nav>
  );
};
