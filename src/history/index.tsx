import React from "react";
import styles from "./history.module.scss";

interface IProps {
  tomatosCounter: number;
}

function History({ tomatosCounter }: IProps) {
  if (tomatosCounter === 0) {
    return <div></div>;
  }

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {Array.from(Array(tomatosCounter)).map((val, i) => (
          <li key={i}>
            <span role="img" aria-label="tomato">
              🍅
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
