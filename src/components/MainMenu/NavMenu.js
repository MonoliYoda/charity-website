import React from "react";
import Link from "react-scroll/modules/components/Link";
import "./NavMenu.scss";

export default function NavMenu() {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <Link to="cta" className="start">
            Start
          </Link>
        </li>
        <li>
          <Link to="steps">O co chodzi?</Link>
        </li>
        <li>
          <Link to="aboutus">O nas</Link>
        </li>
        <li>
          <Link to="">Fundacja i organizacje</Link>
        </li>
        <li>
          <Link to="">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
