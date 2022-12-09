import React from "react";
import FormController from "./FormController";
const FirstNameField = (props) => {
  return (
    <div>
      <label>First Name:</label>
      <input
        type={"text"}
        name={"fname"}
        value={props.user.fname}
        onChange={(event) => {
          const fname = event.target.value;
          // pass value and pointer to setUserInput in memory to change state
          FormController.fnameController(fname, props.setState);
        }}
      />
    </div>
  );
};

export default FirstNameField;
