import Action from "../UI/action/Action";
import Operand from "../UI/operand/Operand";
import Operator from "../UI/operator/Operator";
import { CLEAR_ALL, SET_DISPLAY } from "../actions/types";
import * as Operations from "../constants/operations";
import classes from "./InputContainer.module.css"

export function InputContainer () {
  const inputs: Array<string> = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', "."];
  return (
    <div className={classes.container}> 
      <div className={classes.container}>
        <Action action={CLEAR_ALL} label="AC" />
        <Action action={SET_DISPLAY} label="+/-" />
        <Action action={SET_DISPLAY} label="%" />
        
        {inputs.map(i => (
          <Operand  value={i} key={i}/>
        ))}

      </div>

      <div className={classes.operators}>
        <Operator operation={Operations.MULTIPLY} label="x" />
        <Operator operation={Operations.MINUS} label="-" />
        <Operator operation={Operations.DIVIDE} label="÷" />
        <Operator operation={Operations.PLUS} label="+" />
        <Operator operation={Operations.SOLVE} label="=" />
      </div>
    </div>
  );
};

export default InputContainer;