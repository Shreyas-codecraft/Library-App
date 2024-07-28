import React from 'react';
import styles from './TotalBillSection.module.css'
import "../../App.css"
import { TipAndTotalInput } from '../TipAndTotalInput/TipAndTotalInput';
import { ResetButton } from '../ResetButton/ResetButton';

interface TotalBillSectionProps {
}

export function TotalBillSection(props:TotalBillSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tip}><TipAndTotalInput label='Tip Amount' value='0.00'></TipAndTotalInput></div>
      <div className={styles.total}><TipAndTotalInput label='Total' value='0.00'></TipAndTotalInput></div>      
      <div className={styles.btncontainer}><ResetButton value='RESET'></ResetButton></div>
    </div>
  );
};

