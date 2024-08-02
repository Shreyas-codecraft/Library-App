import styles from "./NumberInput.module.css";
import dollar from "../../assets/dollar.svg";
import person from "../../assets/person.svg";
import "../../App.css"

interface NumberInputProps {
  value?: string;
  label: string;
  typeOfIcon: "dollar" | "person";
  onChange:(value:string)=>void;
  errorMsg:string
}

export function NumberInput(props: NumberInputProps) {
  const icon = props.typeOfIcon === "dollar" ? dollar : person;
 
  return (
    <div className={styles.container}>
      <label htmlFor="number-input" className={styles.label}>{props.label}</label>
      <div className={styles.parent}>
        <img src={icon} alt={`${props.typeOfIcon} icon`} className={styles.icon} />
        <input
          type="text"
          id="number-input"
          value={props.value} 
          className={styles.numberInput}
          placeholder='0'
          onChange={(e) => props.onChange(e.target.value)} 
        />
      </div>
      <div className={styles.error}>{props.errorMsg}</div>
    </div>
  );
}


