import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@mui/material";

const App = () => {
  const diveStyle = { paddingBottom: 8 };
  return (
    <div>
      <h1>App</h1>
      <form>
        <div style={diveStyle}>
          <label>Username:</label>
          <br></br>
          <input></input>
        </div>
        <div style={diveStyle}>
          <label>Email:</label>
          <br></br>
          <input></input>
        </div>
        <div style={diveStyle}>
          <label>Password:</label>
          <br></br>
          <input></input>
        </div>
      </form>
      <Button
        variant="filled"
        style={{ backgroundColor: "#0098db", color: "white", width: 140 }}
      >
        {" "}
        Press Me
      </Button>
    </div>
  );
};

const id = document.getElementById("root");

const root = ReactDOM.createRoot(id);

root.render(<App></App>);
