import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>EduOnline</h1>
      <ul className={styles.navLinks}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/courses">Cursos</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;