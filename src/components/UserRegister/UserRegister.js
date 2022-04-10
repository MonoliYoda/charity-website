import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import decoration from "../../assets/Decoration.svg";

export default function UserRegister() {
  return (
    <>
      <MainMenu />
      <section className="user-login">
        <h1>Załóż konto</h1>
        <img src={decoration} alt="decoration" height="33" />
        <form>
          <label for="email">Email</label>
          <input id="email" type="email" />
          <label for="password">Hasło</label>
          <input id="password" type="password" />
          <label for="passwordconfirm">Powtórz hasło</label>
          <input id="passwordconfirm" type="password" />
        </form>
        <div className="buttons">
          <button id="login">Zaloguj się</button>
          <button className="outlined" id="signup">
            Załóż konto
          </button>
        </div>
      </section>
    </>
  );
}
