import React from 'react';
import styles from "./NumberInput.module.css";
import dollar from "../../assets/dollar.svg";
import person from "../../assets/person.svg";
import "../../App.css"

interface NumberInputProps {
  value: number;
  label: string;
  typeOfIcon: "dollar" | "person";
}

export function NumberInput({ value, label, typeOfIcon }: NumberInputProps) {
  const icon = typeOfIcon === "dollar" ? dollar : person;

  return (
    <div className={styles.container}>
      <label htmlFor="number-input" className={styles.label}>{label}</label>
      <div className={styles.parent}>
        <img src={icon} alt={`${typeOfIcon} icon`} className={styles.icon} />
        <input
          type="text"
          id="number-input"
          value={value}
          className={styles.numberInput}
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
