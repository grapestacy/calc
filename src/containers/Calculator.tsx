
import Display from "../UI/display/Display";
import InputContainer from "./InputContainer";
import styles from "./Calculator.module.css"

export function Calculator () {
  ////?
  return (
    <div className={styles.calculator}>
      <Display/>
      <InputContainer />
    </div>
  );
};

export default Calculator;