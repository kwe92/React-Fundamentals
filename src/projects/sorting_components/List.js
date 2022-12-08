import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const [data, setData] = useState([]);
  const [sortPressed, setSortPressed] = useState(false);

  useEffect(() => {
    setData(props.items);
  }, []);

  const sortHandler = () => {
    let sortedData;
    if (!sortPressed) {
      sortedData = [...data].sort((a, b) => {
        return a.id > b.id ? -1 : 1;
      });
      setSortPressed(true);
    } else {
      sortedData = [...data].sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
      setSortPressed(false);
    }

    setData(sortedData);
  };
  const itemList = data.map((emp) => {
    return <ListItem key={emp.id} emp={emp} />;
  });
  return (
    <div>
      <ul>{itemList}</ul>
      <button type={"button"} onClick={sortHandler}>
        Sort
      </button>
    </div>
  );
};

export default List;
