import React, { useState } from "react";
import getEmployeeObj from "./EmployeeObject";
import FormController from "./FormController";
const ControledComponent = (props) => {
  // Array destructuring
  const [userInput, setUserInput] = useState(new getEmployeeObj());

  console.log("User Input:", userInput);

  return (
    <div>
      <form
        onSubmit={(event) => {
          // Prevent the default HTML Form element behavior
          event.preventDefault();
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "12rem",
            height: "2rem",
            gap: "0.5rem",
          }}
        >
          <label>First Name:</label>
          <input
            type={"text"}
            name={"fname"}
            value={userInput.fname}
            onChange={(event) => {
              const fname = event.target.value;
              // pass value and pointer to setUserInput in memory to change state
              FormController.fnameController(fname, setUserInput);
            }}
          />
          <label>Last Name:</label>
          <input
            type={"text"}
            name={"lname"}
            value={userInput.lname}
            onChange={(event) => {
              const lname = event.target.value;
              FormController.lnameController(lname, setUserInput);
            }}
          />
          <label>Email:</label>
          <input
            type={"text"}
            name={"email"}
            value={userInput.email}
            onChange={(event) => {
              const email = event.target.value;
              FormController.emailController(email, setUserInput);
            }}
          />
          <input
            type={"submit"}
            onClick={() => setUserInput(new getEmployeeObj())}
          />
        </div>
      </form>
    </div>
  );
};
export default ControledComponent;
