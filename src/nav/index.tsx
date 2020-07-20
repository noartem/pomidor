import React from "react";
import styles from "./nav.module.scss";

interface IProps {
  reset: VoidFunction;
  clearHistory: VoidFunction;
}

function Nav({ reset, clearHistory }: IProps) {
  return (
    <nav className={styles.nav}>
      <button onClick={reset}>Reset</button>
      <button onClick={clearHistory}>Clear</button>
    </nav>
  );
}

export default Nav;
