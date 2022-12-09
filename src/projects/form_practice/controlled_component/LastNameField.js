import React from "react";
import FormController from "./FormController";

const LastNameField = (props) => {
  return (
    <div>
      <label>Last Name:</label>
      <input
        type={"text"}
        name={"lname"}
        value={props.user.lname}
        onChange={(event) => {
          const lname = event.target.value;
          FormController.lnameController(lname, props.setState);
        }}
      />
    </div>
  );
};

export default LastNameField;
