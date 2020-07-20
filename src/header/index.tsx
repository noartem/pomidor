import React from "react";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <h1>Pomidor — time tracker</h1>
        <a href="https://github.com/noartem">noartem</a>
      </nav>
    </header>
  );
}

export default Header;
