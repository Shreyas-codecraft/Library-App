// Tip.tsx
import React, { SetStateAction, useState } from 'react';
import styles from './Tip.module.css';

interface TipProps {
  value: number | string;
  onClick: () => void;
  isSelected: boolean;
  selected:string|number
  setSelected: React.Dispatch<SetStateAction<string | number>>;
  isEditing:boolean;
  setIsEditing:React.Dispatch<React.SetStateAction<boolean>>
  inputValue:string
  setInputValue:React.Dispatch<React.SetStateAction<string>>
  custumValue:string;
  setCustumValue: React.Dispatch<React.SetStateAction<string>>
}

export function Tip({ value, onClick, isSelected , isEditing, setIsEditing, inputValue, setInputValue, custumValue, setCustumValue, setSelected}: TipProps) {
  // const [isEditing, setIsEditing] = useState(false);
  // const [inputValue, setInputValue] = useState('');
  const handleClick = () => {
    if (value === "custom") {
      setIsEditing(true);
    } else {
      onClick();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBlur = (e) => {
    // if (inputValue && !inputValue.includes("%")) {
    //   setInputValue(inputValue + "%");
    //   setIsEditing(false);
    // }
    // setIsEditing(false);
    setCustumValue(e.target.value);
    console.log(e.target.value)
    setSelected(custumValue)
    handleBlur
  };

  return (
    <>
      {isEditing && value === "custom" ? (
        <input
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <button
          className={`${value === 'custom' ? styles.customBtn : styles.tipbtn} ${isSelected ? styles.selected : ''}`}
          onClick={handleClick}
        >
          {value === 'custom' ? 'Custom' : `${value}%`}
        </button>
      )}
    </>
  );
}
