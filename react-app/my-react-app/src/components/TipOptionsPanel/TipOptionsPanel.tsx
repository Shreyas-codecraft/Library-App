import React, { SetStateAction, useState } from 'react';
import styles from './TipOptionsPanel.module.css';
import "../../App.css";
import { Tip } from '../Tip/Tip';

interface TipOptionsPanelProps {
  chooseTipText: string;
  selected: string | number;
  setSelected: React.Dispatch<SetStateAction<string | number>>;
  custumValue:string;
  setCustumValue:React.Dispatch<React.SetStateAction<string>>
}

export function TipOptionsPanel(props: TipOptionsPanelProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  const tipValues = [5, 10, 15, 25, 50, 'custom'];

  const handleTipSelection = (value: number | string) => {
    props.setSelected(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tipOptionsText}>{props.chooseTipText}</div>
      <div className={styles.parent}>
        {tipValues.map(value => (
          <Tip
            key={value}
            value={value}
            onClick={() => handleTipSelection(value)}
            isSelected={props.selected === value}
            selected={props.selected}
            setSelected={props.setSelected}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            inputValue={inputValue}
            setInputValue={setInputValue}
            custumValue={props.custumValue}
            setCustumValue={props.setCustumValue}
          />
        ))}
      </div>
    </div>
  );
}
