import React, { useState } from "react";

import { FormInput } from "../form-input/FormInput";
import { CustomButton } from "../custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./login.styles.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={event => setEmail(event.target.value)}
          required
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          handleChange={event => setPassword(event.target.value)}
          required
        ></FormInput>
        <div className="buttons">
          {" "}
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
