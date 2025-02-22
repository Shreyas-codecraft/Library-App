import styles from "./ResetButton.module.css";
import "../../App.css";
import { useEffect, useState } from "react";
import { Action, State } from "../../bill_model";

interface ResetButtonProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  value: string;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}
export function ResetButton({
  value,
  state,
  dispatch,
  customIsInput,
  setcustomIsInput,
}: ResetButtonProps) {
  const [resetIsActive, setResetIsActive] = useState(false);
  const handleOnClick = (e) => {
    dispatch({ type: "RESET" });
    setcustomIsInput(false)
  };

  useEffect(() => {
    if (state.selected || state.bill || state.person) {
      setResetIsActive(true);
    } else {
      setResetIsActive(false);
    }
  }, [state.selected, state.bill, state.person, dispatch]);
  return (
    <button
      className={`${styles.container} ${resetIsActive ? styles.active : ""}`}
      disabled={!resetIsActive}
      onClick={handleOnClick}
    >
      <div className={styles.textContainer}>{value}</div>
    </button>
  );
}
