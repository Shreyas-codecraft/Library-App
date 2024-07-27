import error from "./assets/error.svg";
import info from "./assets/info.svg";
import warning from "./assets/warning.svg";
import "./widget.css";
import "./App.css";

export const Widget = ({
  type,
  heading,
  children,
}: {
  type: string;
  heading: string;
  children: string;
}) => {
  let svg = "";
  let backgorungColor = "";
  let borderLeft = "";
  if (type === "info") {
    svg = info;
    backgorungColor = "#dfebf6";
  } else if (type === "warning") {
    svg = warning;
    backgorungColor = "#fff6bf";
    borderLeft = "#ff9d00";
  } else if (type === "error") {
    svg = error;
    backgorungColor = "#EF9A9A";
  }
  return (
    <div>
      <div
        className={`widget ${type}`}
        style={{
          backgroundColor: backgorungColor,
          borderLeft: `4px solid ${borderLeft}`,
        }}
      >
        <img src={svg} className="SVG"></img>
        <h2>{heading}</h2>
        <p>{children}</p>
      </div>
      <br></br>
    </div>
  );
};
