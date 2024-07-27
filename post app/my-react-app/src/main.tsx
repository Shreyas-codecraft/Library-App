import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

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

ReactDOM.createRoot(document.getElementById("root")!).render(fun);
