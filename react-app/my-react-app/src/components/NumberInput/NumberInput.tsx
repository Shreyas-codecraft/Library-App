import styles from "./NumberInput.module.css";
import dollar from "../../assets/dollar.svg";
import person from "../../assets/person.svg";
import "../../App.css"
import { useId } from "react";

interface NumberInputProps  {
  value?: string;
  label: string;
  typeOfIcon: "dollar" | "person";
  onChange:(value:string)=>void;
  errorMsg:string
}
  
export function NumberInput(props: NumberInputProps) {
  const icon = props.typeOfIcon === "dollar" ? dollar : person;
  const id = useId();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };
  

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>{props.label}</label>
      <div className={`${styles.parent} ${props.errorMsg ? styles.errOutLine : ""}`}>
        <img src={icon} alt={`${props.typeOfIcon} icon`} className={styles.icon} />
        <input
          type="number"
          id={id}
          value={props.value} 
          className={styles.numberInput}
          placeholder='0'
          onChange={(e) => props.onChange(e.target.value)} 
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.error}>{props.errorMsg}</div>
      
    </div>
  );
}


