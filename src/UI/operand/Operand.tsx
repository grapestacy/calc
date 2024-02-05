import React from "react";
import { setNumberValue } from "../../actions";
import classes from "./Operand.module.css";
import { useAppSelector, useAppDispatch} from "../../app/hooks";
import { selectDisplayValue, selectWaitingForNumber } from "../../selectors/calculator";

interface OperandProps {
  value: string;
}

const Operand: React.FC<OperandProps> = ({value}) => {
  
  const displayValue = useAppSelector(selectDisplayValue);
  const waitingForNumber = useAppSelector(selectWaitingForNumber);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setNumberValue(value, displayValue, waitingForNumber));
  };

  return (
    <button className={classes.operand} id={value === '0' ? classes.zero : ''} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Operand;

