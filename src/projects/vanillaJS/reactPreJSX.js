import React from "react";
import ReactDOM from "react-dom/client";
import jojo from "./images/jojo@._V1_.jpg";

const app = React.createElement(
  "div",
  {
    style: {
      backgroundColor: "grey",
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
  },
  React.createElement(
    "div",
    {
      style: {
        color: "white",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "purple",
      },
    },
    React.createElement("h2", {}, "React before JSX!")
  ),
  React.createElement("img", {
    src: jojo,
    style: {
      height: "100%",
      width: "100%",
      objectFit: "fill",
    },
  })
);

const id = document.getElementById("root");
const root = ReactDOM.createRoot(id);

root.render(app);
