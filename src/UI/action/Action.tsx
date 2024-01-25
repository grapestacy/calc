import React from "react";
import { connect } from "react-redux";
import { clearDisplay, clearAll, setDisplayValue} from "../../actions/index";
import {SET_DISPLAY, CLEAR_ALL, CLEAR_DISPLAY} from "../../actions/types";

const Action = ({ action, displayValue, label, clearDisplay, clearAll, setDisplayValue}) => {

  const checkClearMethod = displayValue === '0';
  const clearText = checkClearMethod ? 'AC' : 'C';

  //console.log(action)
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

const mapStateToProps = state => {
  return {
      displayValue: state.displayValue
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAll, 
    clearDisplay, 
    setDisplayValue
  }

}

export default connect(mapStateToProps, { 
  clearDisplay,
  clearAll,
  setDisplayValue}
)(Action);
