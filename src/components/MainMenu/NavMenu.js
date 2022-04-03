import React from "react";
import Link from "react-scroll/modules/components/Link";
import "./NavMenu.scss";

export default function NavMenu() {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <Link to="" className="start">
            Start
          </Link>
        </li>
        <li>
          <Link to="">O co chodzi?</Link>
        </li>
        <li>
          <Link to="">O nas</Link>
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
