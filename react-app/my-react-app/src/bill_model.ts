export interface State {
  bill: string;
  person: string;
  selected: string;
  customIsInput:boolean
}

export type Action =
  | { type: "SET_VALUE"; field: "bill" | "person"; value: string }
  | { type: "SET_SELECTED"; value: string }
  | { type: "CUSTOM" ,value:boolean}
  | { type: "RESET" };

