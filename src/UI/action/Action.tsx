import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectDisplayValue } from "../../selectors/calculator";
import { setDisplayValue } from "../../actions/index";
import {clearDisplay, clearAll} from "../../containers/calculatorSlice"
import {SET_DISPLAY, CLEAR_ALL, CLEAR_DISPLAY} from "../../actions/types";
import { useAppDispatch } from "../../app/hooks";
import classes from "./Action.module.css"

interface ActionProps {
  action: string;
  label: string;
}

const Action: React.FC<ActionProps> = ({ action, label}) => {
  const displayValue = useAppSelector(selectDisplayValue);
  const dispatch = useAppDispatch();

  const checkClearMethod = displayValue === '0';
  const clearText = checkClearMethod ? 'AC' : 'C';

  const handleActionRequest = () => {
    switch (action) {
      case SET_DISPLAY:
        dispatch(setDisplayValue(displayValue, label));
        break;
      default:
        (checkClearMethod) ? dispatch(clearAll()) : dispatch(clearDisplay());
        break;
    }
  };

  return (
    <button className={classes.action} onClick={handleActionRequest}>
      {(action === CLEAR_ALL || action === CLEAR_DISPLAY) ? clearText : label}
    </button>
  );
};


export default Action;