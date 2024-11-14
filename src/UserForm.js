import React from "react";
import useFormInput from "./useFormInput";
import "./Style.css";

function UserForm(params) {
  const username = useFormInput("");
  const email = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username", username.value);
    console.log("Email", email.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input type="text" {...username} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" {...email} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
