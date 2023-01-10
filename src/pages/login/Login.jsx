import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          className="loginInput"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="loginInput"
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
