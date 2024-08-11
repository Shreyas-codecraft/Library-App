import styles from "./BillSplitter.module.css";
import "../../App.css";
import { FirstHalf } from "../FirstHalf/FirstHalf";
import { TotalBillSection } from "../TotalBillSection/TotalBillSection";
import { useReducer } from "react";
import { State, Action } from "../../bill_model";

// interface BillSplitterProps {}

const initialState: State = {
  bill: "",
  person: "",
  selected: "",
  customIsInput:false
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        [action.field]: action.value ,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.value,
      };
    case "CUSTOM":
      return{
        ...state,
        customIsInput:action.value
      }
      case "RESET":
        return initialState
  }
}

export function BillSplitter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.container}>
      <FirstHalf state={state} dispatch={dispatch} />
      <TotalBillSection state={state} dispatch={dispatch} />
    </div>
  );
}
