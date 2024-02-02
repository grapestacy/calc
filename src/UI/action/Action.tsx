import React from "react";
import { connect } from "react-redux";
import { setDisplayValue } from "../../actions/index";
import {clearDisplay, clearAll} from "../../containers/calculatorSlice"
import {SET_DISPLAY, CLEAR_ALL, CLEAR_DISPLAY} from "../../actions/types";

interface ActionProps {
  action: string;
  displayValue: string;
  label: string;
  clearDisplay: () => void;
  clearAll: () => void;
  setDisplayValue: (value: string, label: string) => void;
}

const Action: React.FC<ActionProps> = ({ action, displayValue, label, clearDisplay, clearAll, setDisplayValue}) => {
  const checkClearMethod = displayValue === '0';
  const clearText = checkClearMethod ? 'AC' : 'C';

  const handleActionRequest = () => {
    switch (action) {
      case SET_DISPLAY:
        setDisplayValue(displayValue, label);
        break;
      default:
        (checkClearMethod) ? clearAll() : clearDisplay();
        break;
    }
  };

  return (
    <button onClick={handleActionRequest}>
      {(action === CLEAR_ALL || action === CLEAR_DISPLAY) ? clearText : label}
    </button>
  );
};

const mapStateToProps = (state: { displayValue: string }) => {
  return {
      displayValue: state.displayValue
  }
};

const mapDispatchToProps = {
  clearAll, 
  clearDisplay, 
  setDisplayValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);

