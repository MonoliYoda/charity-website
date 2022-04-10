import React from "react";
import "./UserLogin.scss";
import MainMenu from "../MainMenu/MainMenu";
import decoration from "../../assets/Decoration.svg";

export default function UserLogin() {
  return (
    <>
      <MainMenu />
      <section className="user-login">
        <h1>Zaloguj się</h1>
        <img src={decoration} alt="decoration" height="33" />
        <form>
          <label for="email">Email</label>
          <input id="email" type="email" />
          <label for="password">Hasło</label>
          <input id="password" type="password" />
        </form>
        <div className="buttons">
          <button id="signup">Załóż konto</button>
          <button id="login">Zaloguj się</button>
        </div>
      </section>
    </>
  );
}
