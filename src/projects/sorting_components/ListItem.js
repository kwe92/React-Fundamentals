import React from "react";

const ListItem = (props) => {
  return <li>{props.emp.info()}</li>;
};

export default ListItem;
