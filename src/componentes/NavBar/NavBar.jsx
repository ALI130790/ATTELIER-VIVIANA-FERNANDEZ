import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <section id="navbar">
      <Link to="/" className="brand">
        <img src="/img/man.png" alt="img" />
      </Link>
      <ul>
        <li>
          <Link to="/categorias/novias">NOVIAS</Link>
        </li>
        <li>
          <Link to="/categorias/fiesta">FIESTA</Link>
        </li>
        <li>
          <Link to="/categorias/15 años">15 AÑOS</Link>
        </li>
        <li>
          <Link to="/categorias/niñas">NIÑAS</Link>
        </li>
      </ul>
      <CartWidget />
    </section>
  );
};

export default NavBar;