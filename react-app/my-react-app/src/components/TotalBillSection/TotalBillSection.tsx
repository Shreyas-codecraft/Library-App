import React from 'react';
import styles from './TotalBillSection.module.css'
import "../../App.css"
import { TipAndTotalInput } from '../TipAndTotalInput/TipAndTotalInput';
import { ResetButton } from '../ResetButton/ResetButton';

interface TotalBillSectionProps {
  billAmount:string
  selected:number
  noOfPeople:number
}


export function TotalBillSection(props:TotalBillSectionProps) {
  const tipAmount = (props.selected/100)*(Number(props.billAmount))/props.noOfPeople
  const totalAmountPerPerson = ((Number(props.billAmount))+Number(props.selected))/props.noOfPeople;

  return (
    <div className={styles.container}>
      <div className={styles.parent}><TipAndTotalInput label='Tip Amount' value={isNaN(tipAmount) || Number(totalAmountPerPerson)===Infinity ? "0.00" : tipAmount.toFixed(2)}></TipAndTotalInput>
      <TipAndTotalInput label='Total' value={isNaN(Number(totalAmountPerPerson)) || Number(totalAmountPerPerson)===Infinity ? "0.00" : totalAmountPerPerson.toFixed(2)}></TipAndTotalInput></div> 
      <ResetButton value='RESET'></ResetButton>
    </div>
  );
} 

