import React from "react";
import period from "../period";
import styles from "./tomato.module.scss";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const twoDign = (n: number) => String(n).padStart(2, "0");

function getTime(time: number): string {
  const timeDate = new Date(time * 1000);
  const minutes = twoDign(timeDate.getMinutes());
  const seconds = twoDign(timeDate.getSeconds());

  return `${minutes}:${seconds}`;
}

const calcCompletness = (time: number): number =>
  ((period - time) / period) * 100;

interface IProps {
  time: number;
  togglePlayer: VoidFunction;
}

function Tomato({ time, togglePlayer }: IProps) {
  return (
    <button onClick={togglePlayer} className={styles.resetButton}>
      <CircularProgressbar
        className={styles.circle}
        value={calcCompletness(time)}
        text={getTime(time)}
      />
    </button>
  );
}

export default Tomato;
