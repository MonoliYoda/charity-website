import React from "react";
import "./HomeContact.scss";
import decoration from "../../assets/Decoration.svg";

export default function HomeContact() {
  const textareaPlaceholder =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section className="contact">
      <div className="image"></div>
      <div className="right">
        <h1>O nas</h1>
        <img src={decoration} alt="decoration" height="33" />
        <form>
          <div className="form-top">
            <div>
              <label for="name">Wpisz swoje imię</label>
              <input type="text" id="name" placeholder="Mike" />
            </div>
            <div>
              <label for="email">Wpisz swój email</label>
              <input type="email" id="email" placeholder="mike@tyson.com" />
            </div>
          </div>
          <div className="form-middle">
            <label for="message">Wpisz swoją wiadomość</label>
            <textarea
              id="message"
              placeholder={textareaPlaceholder}
              rows="5"
            ></textarea>
          </div>
          <div className="form-bottom">
            <button>Wyślij</button>
          </div>
        </form>
      </div>
      <footer>
        <p>Copyright by Coders Lab</p>
      </footer>
    </section>
  );
}
