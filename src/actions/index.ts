import {store} from "../app/store"
import {
  setNumber,
  doMath,
  setDisplay,
  SetNumberType,
  DoMathType
} from "../containers/calculatorSlice"   

const percentInput = (n: number) => n/100;
const swapSignInput = (n: number) => n*-1;

export const setDisplayValue = (displayValue: string, operator: string) => {
  return (dispatch: any) => {
    let number = parseFloat(displayValue);
    
    switch(operator) {
      case '%':
        number = percentInput(number);
        break;
      case '+/-':
        number = swapSignInput(number);
        break;
      default:
        break;
      }
    let result = number.toString();
    dispatch(setDisplay(result))
    //console.log(store.getState());
  };
};

export const setNumberValue = (value: string, displayValue: string, waitingForNumber: boolean) => {

  return (dispatch: any) => {
  let calculator: SetNumberType = {
    displayValue : displayValue,
    waitingForNumber: waitingForNumber
  }

  if ((value) !== '.') {
    if(waitingForNumber) {
      calculator.displayValue = value;
      calculator.waitingForNumber = false;
    } else {
      calculator.displayValue = displayValue === '0' ? value : displayValue + value;
    }
  }
  else {
    if (value !== calculator.displayValue  && calculator.displayValue.indexOf('.') === -1) {
      calculator.displayValue = calculator.displayValue + '.';
      calculator.waitingForNumber = false;
      }
      else if (value === calculator.displayValue && calculator.waitingForNumber) {
        calculator.displayValue = '0.';
        calculator.waitingForNumber = false;
      }
    }
  dispatch(setNumber(calculator))

  };
};


const Calculating = (prevValue: number, nextValue: number, operator: string) => {

  switch(operator){
    
    case 'PLUS':
      return prevValue + nextValue;
    case 'MINUS':
      return prevValue - nextValue;
    case 'MULTIPLY': 
      return prevValue * nextValue;
    case 'DIVIDE':
      return prevValue / nextValue;
    default: 
      return nextValue;
  }
}

export const countMath = (nextOperator: string, value: string, displayValue: string, operation: string, waitingForNumber: boolean) => {


  console.log(store.getState())

  return (dispatch: any) => {
    let calculator: DoMathType = {
    value: value,
    displayValue: displayValue,
    operator: operation,
    waitingForNumber: waitingForNumber
  };

  const inputValue = parseFloat(displayValue);

  if (value === '0') {
    calculator.value = inputValue.toString();
  }
  else if (operation && !waitingForNumber) {
    const currentValue = parseFloat(value) || 0;
    const newValue = Calculating(currentValue, inputValue, operation);
    calculator.value = newValue.toString();
    calculator.displayValue = newValue.toString();
  }
  calculator.waitingForNumber = true;
  calculator.operator = nextOperator;
  
  dispatch(doMath(calculator));

};
};
