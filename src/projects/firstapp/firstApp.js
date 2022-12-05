import React from "react";
import ReactDOM from "react-dom/client";

// const helloUniverse =<h1>Hello, Universe we are one and we are many.</h1>;

const Welcome = () => (
  <div>
    <h1>Welcome to React!</h1>
    <h2>This is similar to Flutter!</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Welcome);
