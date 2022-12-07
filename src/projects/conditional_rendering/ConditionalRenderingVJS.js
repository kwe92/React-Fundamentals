// Condotional Rendering in React

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const id = document.getElementById("root");
const root = ReactDOM.createRoot(id);
const cont1Style = {
  backgroundColor: "black",
  display: "flex",
  color: "white",
  height: "10rem",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
};

const loggedInHeaderStyle = {
  backgroundColor: "white",
  height: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
};
const cont1 = React.createElement(
  "div",
  { style: cont1Style },
  React.createElement("h1", {}, "Working With React!")
);

// JSX as an Expression
const Greeting = (props) => {
  if (props.isLoggedIn)
    return (
      <div style={loggedInHeaderStyle}>
        <h1 style={{ marginTop: 0 }}>The Journey Begins Kweayon</h1>
      </div>
    );
  else return <h1>Please login</h1>;
};

const App = (props) => {
  // Mutable variable to assign a JSX button element conditionally
  let button;

  // Add state to a functional component
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Handle login
  const loginHandler = () => setIsLoggedIn(true);
  // Handle logout
  const logoutHandler = () => setIsLoggedIn(false);

  const baseStyle = {
    backgroundColor: "#d3d3d3",
    // color: "white",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    textAlign: "center",
    overFlow: "auto",
  };

  // Assigns a button element conditionally (conditional ternary operator)
  // based on user login status (a boolean variable)
  isLoggedIn
    ? (button = (
        <button type="button" onClick={logoutHandler}>
          Logout
        </button>
      ))
    : (button = (
        <button type="button" onClick={loginHandler}>
          Login
        </button>
      ));

  return (
    // Nested components, both rely on the state of a user being logged in or logged out
    <div style={baseStyle}>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
      {cont1}
    </div>
  );
};

// Render your Custom HTML element in the root div of index.html
root.render(<App />);
