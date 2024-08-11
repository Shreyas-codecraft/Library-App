import React from "react";
import styles from "./FinalForm.module.css";
import "../../App.css";
import { BillSplitter } from "../BillSplitter/BillSplitter";

export function FinalForm() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div>SPLI</div>
        <div>TTER</div>
      </div>
      <BillSplitter></BillSplitter>
    </div>
  );
}
