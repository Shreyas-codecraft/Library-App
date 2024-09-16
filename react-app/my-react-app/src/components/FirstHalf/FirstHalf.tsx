import styles from "./FirstHalf.module.css";
import "../../App.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { TipOptionsPanel } from "../TipOptionsPanel/TipOptionsPanel";
import { Action, State } from "../../bill_model";


export interface FirstHalfProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  customIsInput:boolean
  setcustomIsInput:React.Dispatch<React.SetStateAction<boolean>>
}
const errorMsg = {bill:"",person:""};

export function FirstHalf({
  state,
  dispatch,customIsInput,setcustomIsInput
}: FirstHalfProps) {

  const validateNumber = (value: string): string => {
    if (parseInt(value) < 0) return "The value is negative";
    return "";
  };

  const handleInputChange = (field: "bill" | "person") => (value: string) => {
    dispatch({ type: "SET_VALUE", field, value: value });
    errorMsg[field]=validateNumber(value);
  };

  return (
    <div className={styles.container}>
      <NumberInput
        label="Bill"
        typeOfIcon="dollar"
        value={state.bill.toString()}
        onChange={handleInputChange("bill")}
        errorMsg={errorMsg.bill}
      />
      <TipOptionsPanel
        chooseTipText="Select Tip %"
        state={state}
        dispatch={dispatch}
        customIsInput={customIsInput}
        setcustomIsInput={setcustomIsInput}
      />
      <NumberInput
        label="Number of people"
        typeOfIcon="person"
        value={state.person.toString()}
        onChange={handleInputChange("person")}
        errorMsg={errorMsg.person}
      />
    </div>
  );
}
