// TODO: Add Navigation to another page for: ControledComponent example

import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./projects/sorting_components/app";
// import ControledComponent from "./projects/form_practice/controlled_component/ControlledComponent"; <ControledComponent />
// import StyledComponents1 from "./projects/styled_components/style1"; <StyledComponents1 />
// import { StyledComponents2 } from "./projects/styled_components/style2";
////////////////////////////////////////////////////////////////////////////////
import { StyledAppBar } from "./projects/styled_components/customAppBar/CustomAppBar";
/* <Routes>
      <Route path="" element={<Page1 />}></Route>
      <Route path="bigMind" element={<Page2 />}></Route>
      <Route path="void" element={<Page3 />}></Route>
    </Routes> */
////////////////////////////////////////////////////////////////////////////////
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Page1 } from "./projects/styled_components/pages/page1";
import { Page2 } from "./projects/styled_components/pages/page2";
import { Page3 } from "./projects/styled_components/pages/page3";
// import { MenuApp } from "./projects/styled_components/dropdown/MenuApp"; <MenuApp />

const ele = document.getElementById("root");

const root = ReactDOM.createRoot(ele);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledAppBar />

      <Routes>
        <Route path="" element={<Page1 />}></Route>
        <Route path="bigMind" element={<Page2 />}></Route>
        <Route path="void" element={<Page3 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
