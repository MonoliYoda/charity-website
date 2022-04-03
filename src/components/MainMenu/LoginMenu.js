import React from "react";
import { Link } from "react-router-dom";
import "./LoginMenu.scss";

export default function LoginMenu() {
  return (
    <ul className="login-menu">
      <li className="login">
        <Link to="/login">Zaloguj</Link>
      </li>
      <li className="signup">
        <Link to="/signup">Załóż konto</Link>
      </li>
    </ul>
  );
}
