import React from "react";
import Display from "../UI/display/Display";
import InputContainer from "./InputContainer";

export function Calculator () {
  return (
    <div
      style={{
        width: "50vh",
        height: "66vh",
        border: "0.25vh",
        borderBlockColor: "#000",
        borderRadius: "3vh",
        margin: "8vh auto",
        background: "rgba(0, 0, 0, 0.67)",
        boxShadow: "1.5vh 3vh 3vh rgba(0, 0, 0, 0.47)"
      }}
    >
      <Display displayValue={"0"} />
      <InputContainer />
    </div>
  );
};

export default Calculator;