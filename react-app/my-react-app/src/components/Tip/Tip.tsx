import React, { forwardRef } from "react";
import styles from "./Tip.module.css";
import { Action, State } from "../../bill_model";

interface TipProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  value: number | string;
  onClick: () => void;
  isSelected: boolean;
  tipValues: unknown[];
  customIsInput:boolean
  setcustomIsInput:React.Dispatch<React.SetStateAction<boolean>>
}

export const Tip = (
  ({ state, dispatch, value, onClick, isSelected, tipValues,customIsInput,setcustomIsInput }:TipProps) => {
    const handleClick = () => {
      onClick();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!state.selected) {
        console.log("===>")

        // dispatch({ type: "CUSTOM", value: false });
        setcustomIsInput(false)

      }
      dispatch({ type: "SET_SELECTED", value: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!e.target.value) {
        // dispatch({ type: "CUSTOM", value: false });
        setcustomIsInput(false)
      }
      dispatch({ type: "SET_SELECTED", value: e.target.value });
    };

    return (
      <>
        {value === "custom" && customIsInput ? (
          <input
            type="number"
            className={styles.input}
            value={state.selected}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <button
            className={`${value === "custom" ? styles.customBtn : styles.tipbtn} ${isSelected ? styles.selected : ""}`}
            onClick={handleClick}
          >
            {value === "custom" ? "Custom" : `${value}%`}
          </button>
        )}
      </>
    );
  }
);
