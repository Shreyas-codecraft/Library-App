import React, { useRef } from "react";
import styles from "./TipOptionsPanel.module.css";
import "../../App.css";
import { Tip } from "../Tip/Tip";
import { Action, State } from "../../bill_model";

interface TipOptionsPanelProps {
  chooseTipText: string;
  state: State;
  dispatch: React.Dispatch<Action>;
  customIsInput:boolean
  setcustomIsInput:React.Dispatch<React.SetStateAction<boolean>>
}

export function TipOptionsPanel(props: TipOptionsPanelProps) {
  const tipValues = [5, 10, 15, 25, 50, "custom"];

  const handleTipSelection = (value: string) => {
    if ("custom" === value) {
      props.dispatch({ type: "CUSTOM", value: true });
      return
    }
    if (props.state.selected === value) {
      props.dispatch({ type: "SET_SELECTED", value: "" });
      return;
    }
    props.dispatch({ type: "SET_SELECTED", value: JSON.stringify(value) });
  };

  const handleKeyDown = (e) => {
    if (props.state.selected) {
      const selectedValue = props.state.selected;
      let index = tipValues.findIndex(
        (tip) => JSON.stringify(tip) === selectedValue
      );

      if (index === -1) return;

      if (e.key === "ArrowRight") {
        index = (index + 1) % tipValues.length;
        handleTipSelection(tipValues[index]);
      } else if (e.key === "ArrowLeft") {
        index = (index - 1 + tipValues.length) % tipValues.length;
        handleTipSelection(tipValues[index]);
        
      }
    }
  };

  return (
    <div className={styles.container} tabIndex={0} onKeyDown={handleKeyDown}>
      <div className={styles.tipOptionsText}>{props.chooseTipText}</div>
      <div className={styles.parent}>
        {tipValues.map((value) => (
          <Tip
            key={value}
            state={props.state}
            dispatch={props.dispatch}
            value={value}
            onClick={() => handleTipSelection(value)}
            isSelected={props.state.selected === JSON.stringify(value)}
            tipValues={tipValues}
            customIsInput={props.customIsInput}
            setcustomIsInput={props.setcustomIsInput}
          />
        ))}
      </div>
    </div>
  );
}
