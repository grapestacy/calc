import React from "react";
import { SOLVE } from "../../constants/operations";
import classes from "./Operator.module.css";
import { countMath } from "../../actions/index";
import { useAppSelector, useAppDispatch} from "../../app/hooks";
import { selectDisplayValue, selectOperator, selectValue, selectWaitingForNumber } from "../../selectors/calculator";

interface OperatorProps {
  label: string;
  operation: string;
  }

const Operator: React.FC<OperatorProps> = ({ label, operation}) => {
  
  const displayValue = useAppSelector(selectDisplayValue);
  const waitingForNumber = useAppSelector(selectWaitingForNumber);
  const operator = useAppSelector(selectOperator);
  const value = useAppSelector(selectValue);

  const dispatch = useAppDispatch();

  const handleOperatorRequest = () => {
    dispatch(countMath(operation, value, displayValue, operator, waitingForNumber));
  };

  return (
    <button className={classes.operator} id={operation === SOLVE ? classes.solve : ''} onClick={handleOperatorRequest}>
      {label}
    </button>
  );
};

export default Operator;

