import React from "react";
import { Link } from "./CustomElements";

export const Dropdown = ({ submenus }) => {
  const submenuList = submenus.map((submenu, index) => (
    <li key={index} className="menu-items">
      <Link href={submenu.url}>{submenu.title}</Link>
    </li>
  ));
  return <ul className="dropdown">{submenuList}</ul>;
};
