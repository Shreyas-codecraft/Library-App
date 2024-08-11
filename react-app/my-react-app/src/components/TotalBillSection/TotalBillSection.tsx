import styles from "./TotalBillSection.module.css";
import "../../App.css";
import { TipAndTotalInput } from "../TipAndTotalInput/TipAndTotalInput";
import { ResetButton } from "../ResetButton/ResetButton";
import { Action, State } from "../../bill_model";

interface TotalBillSectionProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export function TotalBillSection(props: TotalBillSectionProps) {
  const billAmount = props.state.bill;
  const noOfPeople = props.state.person;
  const tipAmount =
    ((Number(props.state.selected) / 100) * Number(billAmount)) / Number(noOfPeople);
  const totalAmountPerPerson =
    (Number(billAmount) + Number(props.state.selected)) / Number(noOfPeople);

  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <TipAndTotalInput
          label="Tip Amount"
          value={
            isNaN(tipAmount) || !isFinite(Number(totalAmountPerPerson))
              ? "0.00"
              : tipAmount.toFixed(2)
          }
        ></TipAndTotalInput>
        <TipAndTotalInput
          label="Total"
          value={
            isNaN(Number(totalAmountPerPerson)) ||
            !isFinite(Number(totalAmountPerPerson))
              ? "0.00"
              : totalAmountPerPerson.toFixed(2)
          }
        ></TipAndTotalInput>
      </div>
      <ResetButton
        state={props.state}
        dispatch={props.dispatch}
        value="RESET"
      ></ResetButton>
    </div>
  );
}
