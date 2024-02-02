import React from "react";
import { connect } from "react-redux";
import { SOLVE } from "../../constants/operations";
import classes from "./Operator.module.css";
import { countMath } from "../../actions/index";

interface OperatorProps {
  value: string;
  displayValue: string;
  operator: string;
  waitingForNumber: boolean;
  label: string;
  operation: string;
  countMath: (operation: string, value: string, displayValue: string, operator: string, waitingForNumber: boolean) => void;
}

const Operator: React.FC<OperatorProps> = ({ value, displayValue, operator, waitingForNumber, label, operation, countMath }) => {
  const handleOperatorRequest = () => {
    countMath(operation, value, displayValue, operator, waitingForNumber);
  };

  return (
    <button id={operation === SOLVE ? classes.solve : ''} onClick={handleOperatorRequest}>
      {label}
    </button>
  );
};

const mapStateToProps = (state: any) => {
  return {
    value: state.calculator.value,
    displayValue: state.calculator.displayValue,
    operator: state.calculator.operator,
    waitingForNumber: state.calculator.waitingForNumber
  };
};

// const mapDispatchToProps = {
//   countMath
// };

export default connect(mapStateToProps,{countMath})(Operator);

