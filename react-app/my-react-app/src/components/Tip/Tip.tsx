import React from 'react';
import styles from './Tip.module.css'
import "../../App.css"


interface TipProps {
  value:number;
}

export function Tip(props:TipProps) {
  return (
    <div className={styles.container}>
      <div className={styles.numberContainer}>{ props.value }%</div> 
    </div>
  );
};

