import React from "react";
import { Link } from "./CustomElements";
import { Dropdown } from "./Dropdown";
export const MenuItem = ({ item }) => {
  return (
    <li className="menu-items">
      {item.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {item.title}{" "}
          </button>
          <Dropdown submenus={item.submenu} />
        </>
      ) : (
        <Link href={item.url}>{item.title}</Link>
      )}
    </li>
  );
};
