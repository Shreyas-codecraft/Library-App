import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Widget } from "./widget.tsx";
import { BillSplitter} from "./components/BillSplitter/BillSplitter.tsx";
import { NumberInput } from "./components/NumberInput/NumberInput.tsx";
import "./App.css"
import { FinalForm } from "./components/FinalForm/FinalForm.tsx";

// const person = "john";
// const greeting = (
//   <div id="container" style={{ backgroundColor:"yellow" }}>
//     <h1>Welcome Mr</h1>
//     <p>This {[1, 2, 3, 4, 5].map((n) => n)}</p>
//   </div>
// );

const Button = ({
  borderColor,
  children,
}: {
  borderColor: string;
  children: string;
}) => (
  <button
    style={{
      border: `1px solid ${borderColor}`,
    }}
  >
    {children}
  </button>
);
const fun = (
  <div style={{ display: "flex", gap: 10 }}>
    <Button borderColor="red">Button1</Button>
    <Button borderColor="green">Button2</Button>
    <Button borderColor="blue">Button3</Button>
  </div>
);

const component = (
  <div>
    <Widget type="info" heading="React Components">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero amet
      recusandae deserunt. Neque recusandae omnis voluptatibus praesentium
      fugiat nihil autem assumenda. Repellendus, atque ratione in enim iure
      earum eius corporis dolorem quaerat odit tempore magni non fugiat iusto
      ipsum debitis reiciendis beatae quas? Dolorem corporis debitis, fugiat
      dignissimos rerum aperiam dolorum rem error labore quisquam, recusandae
      hic eligendi natus. Harum est totam fugiat, asperiores dolore similique,
      iure nihil id ratione, soluta animi tempore quos deleniti impedit atque
      dicta voluptas? Fugiat, earum vitae! Et voluptates quaerat iusto sint
      sapiente dolore qui pariatur tempora dolor, quidem cupiditate facilis
      excepturi, suscipit earum repudiandae!
    </Widget>
    <Widget type="warning" heading="React Components">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero amet
      recusandae deserunt. Neque recusandae omnis voluptatibus praesentium
      fugiat nihil autem assumenda. Repellendus, atque ratione in enim iure
      earum eius corporis dolorem quaerat odit tempore magni non fugiat iusto
      ipsum debitis reiciendis beatae quas? Dolorem corporis debitis, fugiat
      dignissimos rerum aperiam dolorum rem error labore quisquam, recusandae
      hic eligendi natus. Harum est totam fugiat, asperiores dolore similique,
      iure nihil id ratione, soluta animi tempore quos deleniti impedit atque
      dicta voluptas? Fugiat, earum vitae! Et voluptates quaerat iusto sint
      sapiente dolore qui pariatur tempora dolor, quidem cupiditate facilis
      excepturi, suscipit earum repudiandae!
    </Widget>
    <Widget type="error" heading="React Components">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero amet
      recusandae deserunt. Neque recusandae omnis voluptatibus praesentium
      fugiat nihil autem assumenda. Repellendus, atque ratione in enim iure
      earum eius corporis dolorem quaerat odit tempore magni non fugiat iusto
      ipsum debitis reiciendis beatae quas? Dolorem corporis debitis, fugiat
      dignissimos rerum aperiam dolorum rem error labore quisquam, recusandae
      hic eligendi natus. Harum est totam fugiat, asperiores dolore similique,
      iure nihil id ratione, soluta animi tempore quos deleniti impedit atque
      dicta voluptas? Fugiat, earum vitae! Et voluptates quaerat iusto sint
      sapiente dolore qui pariatur tempora dolor, quidem cupiditate facilis
      excepturi, suscipit earum repudiandae!
    </Widget>
  </div>
);  

const Bill_splitter = (<FinalForm></FinalForm>)

// ReactDOM.createRoot(document.getElementById("root")!).render(fun);

ReactDOM.createRoot(document.getElementById("root")!).render(Bill_splitter);
// ReactDOM.createRoot(document.getElementById("root")!).render(counter);
