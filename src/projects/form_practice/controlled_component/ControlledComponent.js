import React, { useState } from "react";
import getUserObj from "./UserObject";
import "./ControlledComponent.css";
import FirstNameField from "./FirstNameField";
import LastNameField from "./LastNameField";
import EmailNameField from "./EmailField";
import { display } from "@mui/system";

// A controlled Component
//  - Using a React's state to manage form attribute values
const ControlledComponent = (props) => {
  // Array destructuring
  const [userInput, setUserInput] = useState(new getUserObj());

  console.log("User Input:", userInput);

  return (
    <div
      style={{
        textAlign: "center",
        color: "#005073",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome to React</h1>
      <form
        onSubmit={(event) => {
          // Prevent the default HTML Form element behavior
          event.preventDefault();
        }}
      >
        <div className="new-employee__controls">
          <div className="new-employee__control">
            <FirstNameField user={userInput} setState={setUserInput} />
            <LastNameField user={userInput} setState={setUserInput} />
            <EmailNameField user={userInput} setState={setUserInput} />
            <input
              type={"submit"}
              style={{ backgroundColor: "#005073", color: "white" }}
              onClick={() => setUserInput(new getUserObj())}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ControlledComponent;
