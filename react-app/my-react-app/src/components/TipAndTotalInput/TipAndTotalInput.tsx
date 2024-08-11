import styles from './TipAndTotalInput.module.css';
import "../../App.css"

interface TipAndTotalInputProps {
  value: string;
  label: string;
}

export function TipAndTotalInput(props: TipAndTotalInputProps) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>{props.label}</span>
        <span>/ person</span>
      </div>
      <div className={styles.value}>${props.value}</div>
    </div>
  );
}
