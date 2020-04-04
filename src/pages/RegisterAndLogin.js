import React from "react";

import { Login } from "../components/login/Login";
import { Register } from "../components/register/Register";

import "./registerandlogin.styles.scss";

export const RegisterAndLogin = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Register />
    </div>
  );
};
