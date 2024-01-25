import React from "react";
import { connect } from "react-redux";
import { setNumberValue } from "../../actions";
import classes from "./Operand.module.css";

interface OperandProps {
  displayValue: number;
  waitingForNumber: boolean;
  number: number;
  //setNumberValue: (number: number, displayValue: number, waitingForNumber: boolean) => void;
}

const Operand: React.FC<OperandProps> = ({ displayValue, waitingForNumber, number: number, setNumberValue }) => {
  const handleClick = () => {
    setNumberValue(number, displayValue, waitingForNumber);
  };

  return (
    <button id={number === 0 ? classes.zero : ''} onClick={handleClick}>
      {number}
    </button>
  );
};

const mapStateToProps = (state: any) => {
  return {
    displayValue: state.calculator.displayValue,
    waitingForNumber: state.calculator.waitingForNumber
  };
};

export default connect(
  mapStateToProps,
  { setNumberValue }
)(Operand);

