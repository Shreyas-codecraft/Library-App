import React, { useState } from 'react';
import styles from './BillSplitter.module.css';
import "../../App.css";
import { FirstHalf } from '../FirstHalf/FirstHalf';
import { TotalBillSection } from '../TotalBillSection/TotalBillSection';

interface BillSplitterProps {}

interface InputValues {
  bill: string;
  people: string;
}
  
interface ErrorMessages {
  bill: string;
  people: string;
}

export function BillSplitter(props: BillSplitterProps) {
  const [inputValues, setInputValues] = useState<InputValues>({ bill: '', people: '' });
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({ bill: '', people: '' });
  const [selected, setSelected] = useState<number | string>("");
  const [custumValue, setCustumValue] = useState('');

  return (
    <div className={styles.container}>
      <FirstHalf 
        inputValues={inputValues} 
        setInputValues={setInputValues} 
        errorMessages={errorMessages} 
        setErrorMessages={setErrorMessages}
        selected={selected}
        setSelected={setSelected}
        custumValue={custumValue}
        setCustumValue={setCustumValue}
      />
      <TotalBillSection billAmount={inputValues.bill} selected={Number(selected)} noOfPeople={Number(inputValues.people)} />
    </div>
  );
}
