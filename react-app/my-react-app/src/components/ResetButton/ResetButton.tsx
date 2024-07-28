import React from 'react';
import styles from './ResetButton.module.css'
import "../../App.css"


interface ResetButtonProps {
  value:string
}

export function ResetButton(props:ResetButtonProps) {
  return (
    <button className={styles.container}><div className={styles.textContainer}>{props.value}</div></button>
  );
}

