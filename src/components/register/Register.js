import React, { useState } from "react";

import { FormInput } from "./../form-input/FormInput";
import { CustomButton } from "./../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./register.styles.scss";

export const Register = () => {
  // const [userReg, setUserReg] = useState({
  //   displayName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: ""
  // });
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const { displayName, email, password, confirmPassword } = userReg;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      // setUserReg({
      //   displayName: "",
      //   email: "",
      //   password: "",
      //   confirmPassword: ""
      // });
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  // const handleChange = event => {
  //   const { name, value } = event.target;
  // };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={event => setDisplayName(event.target.value)}
          label="display name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          label="email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          label="password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          label="confirm password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
