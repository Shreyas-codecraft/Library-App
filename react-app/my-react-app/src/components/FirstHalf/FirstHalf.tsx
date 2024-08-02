import React, { SetStateAction } from 'react';
import styles from './FirstHalf.module.css';
import "../../App.css";
import { NumberInput } from '../NumberInput/NumberInput';
import { TipOptionsPanel } from '../TipOptionsPanel/TipOptionsPanel';

interface InputValues {
  bill: string;
  people: string;
}

interface ErrorMessages {
  bill: string;
  people: string;
}

export interface FirstHalfProps {
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  errorMessages: ErrorMessages;
  setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessages>>;
  selected: string|number;
  setSelected: React.Dispatch<SetStateAction<string | number>>;
  custumValue:string;
  setCustumValue:React.Dispatch<React.SetStateAction<string>>;
}

export function FirstHalf({ inputValues, setInputValues, errorMessages, setErrorMessages, selected, setSelected, custumValue, setCustumValue }: FirstHalfProps) {
  const validateNumber = (value: string): string => {
    if (value === '') return '';
    if (isNaN(Number(value))) return 'The value is not a number';
    if (parseInt(value) < 0) return 'The value is negative';
    return '';
  };

  const handleInputChange = (field: 'bill' | 'people') => (value: string) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [field]: value
    }));
    setErrorMessages(prevErrors => ({
      ...prevErrors,
      [field]: validateNumber(value)
    }));
  };

  return (
    <div className={styles.container}>
      <NumberInput
        label='Bill'
        typeOfIcon='dollar'
        value={inputValues.bill}
        onChange={handleInputChange('bill')}
        errorMsg={errorMessages.bill}
      />
      <TipOptionsPanel chooseTipText='Select Tip %' selected={selected}
        setSelected={setSelected}
        custumValue={custumValue}
        setCustumValue={setCustumValue}/>
      <NumberInput
        label='Number of people'
        typeOfIcon='person'
        value={inputValues.people}
        onChange={handleInputChange('people')}
        errorMsg={errorMessages.people}
      />
    </div>
  );
}
