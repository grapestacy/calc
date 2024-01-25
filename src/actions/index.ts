import {
    CLEAR_DISPLAY,
    CLEAR_ALL,
    SET_NUMBER,
    DO_MATH,
    SET_DISPLAY
  } from "./types";
  
  import * as Operations from "../constants/operations"
  
  export const clearAll = () => ({ type: CLEAR_ALL});
  
  export const clearDisplay = () => ({ type: CLEAR_DISPLAY});
  
  export const setDisplay = (displayValue: string) => {
    return {
      type: SET_DISPLAY,
      payload: displayValue
    }
  };
    
  export const setNumber = (value: number, calculator) => {
    return {
        type: SET_NUMBER,
        payload: calculator
    }
  };
  
  export const doMath = (calculator) => {
    return {
        type: DO_MATH,
        payload:calculator
    }
  };


  
   //thunk action creator

  const percentInput = (n: number) => n/100;
  const swapSignInput = (n: number) => n*-1;
  
  export const setDisplayValue = (displayValue: string, operation: string) => {
    return (dispatch) => {
      let updatedValue = displayValue;
      switch(operation) {
        case '%':
          percentInput(updatedValue);
          break;
        case '+/-':
          swapSignInput(updatedValue);
          break;
        default:
          break;
      }
      dispatch(setDisplay(updatedValue));
    };
  };

  export const setNumberValue = (value: string, displayValue: string, waitingForNumber: boolean) => {
    return (dispatch) => {

      const calculator = {
        displayValue : displayValue,
        waitingForNumber: waitingForNumber
    };
      
    if ((value) !== '.') {
      if(waitingForNumber) {
        calculator.displayValue = value;
        calculator.waitingForNumber = false;
      } else {
        calculator.displayValue = displayValue === '0' ? value : displayValue + value;
      }
    }
    else {
      if (value !== parseFloat(calculator.displayValue)  && calculator.displayValue.indexOf('.') === -1) {
        calculator.displayValue = calculator.displayValue + '.';
        calculator.waitingForNumber = false;
          
        } else if ((value === parseFloat(calculator.displayValue) && calculator.waitingForNumber)) {
          calculator.displayValue = '0.';
          calculator.waitingForNumber = false;
        }
    }

    dispatch(setNumber(value, calculator))
    };
  };

  const CalcOperations = {
    'PLUS': (prevValue: number, nextValue: number) => prevValue + nextValue,
    'MINUS' : (prevValue: number, nextValue: number) => prevValue - nextValue,
    'MULTIPLY' : (prevValue: number, nextValue: number) => prevValue * nextValue,
    'DIVIDE' : (prevValue: number, nextValue: number) => prevValue / nextValue,
    'SOLVE' : (nextValue: number) => nextValue
  };

  export const countMath = (nextOperator, value, displayValue, operator, waitingForNumber) => {

    return (dispatch) => {let calculator = {
        value: value,
        displayValue: displayValue,
        operator: operator,
        waitingForNumber: waitingForNumber
    };
  
    const inputValue = parseFloat(displayValue);
    if (value === null) {
        calculator.value = inputValue
    } else if (operator && !waitingForNumber) {
      const currentValue = value || 0;
      const newValue = CalcOperations[operator](currentValue, inputValue);
      calculator.value = newValue;
      calculator.displayValue = String(newValue);
    }
    calculator.waitingForNumber = true;
    calculator.operator = nextOperator;

    dispatch(doMath(calculator));
    };
  
  };


