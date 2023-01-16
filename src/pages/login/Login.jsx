import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
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
      <Link to="/register" className="link">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
