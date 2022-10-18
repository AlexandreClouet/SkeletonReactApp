import React from 'react';
import logo from '../../images/logo.svg';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <Link to="/home" className="Login-link" >
          Login
        </Link>
      </header>
    </div>
  );
}

export default Login;
