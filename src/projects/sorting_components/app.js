import React from "react";
import List from "./List";
import employeeData from "./Data";

const App = (props) => {
  return (
    <div>
      <List items={employeeData} />
    </div>
  );
};

export default App;
