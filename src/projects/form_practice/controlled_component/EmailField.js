import React from "react";
import FormController from "./FormController";

const EmailNameField = (props) => {
  return (
    <div>
      <label>Email:</label>
      <input
        type={"text"}
        name={"email"}
        value={props.user.email}
        onChange={(event) => {
          const email = event.target.value;
          FormController.emailController(email, props.setState);
        }}
      />
    </div>
  );
};

export default EmailNameField;
