import React from 'react';
import styles from "./NumberInput.module.css"
import "../../App.css"

interface NumberInputProps {
  value: number;
  label: string;
  typeOfIcon: "$" | "dollar";
}

export function NumberInput(props: NumberInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor='number-input' className={styles.label}>{props.label}</label>
      <input 
        type='text' 
        id='number-input' 
        value={props.value || "0"} 
        className={styles.numberInput}
        onChange={() => {}} 
      />
    </div>
  );
}
