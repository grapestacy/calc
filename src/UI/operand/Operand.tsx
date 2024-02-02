import React from "react";
import { connect } from "react-redux";
import { setNumberValue } from "../../actions";
import classes from "./Operand.module.css";

interface OperandProps {
  displayValue: string;
  waitingForNumber: boolean;
  value: string;
  setNumberValue: (number: string, displayValue: string, waitingForNumber: boolean) => void;
}

const Operand: React.FC<OperandProps> = ({ displayValue, waitingForNumber, value, setNumberValue }) => {
  const handleClick = () => {
    setNumberValue(value, displayValue, waitingForNumber);
  };

  return (
    <button id={value === '0' ? classes.zero : ''} onClick={handleClick}>
      {value}
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

