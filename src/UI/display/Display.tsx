import classes from "./Display.module.css";
import { useAppSelector } from "../../app/hooks";
import { selectDisplayValue } from "../../selectors/calculator";

const Display = () => {
  const displayValue = useAppSelector(selectDisplayValue);
  
  return (
    <h1 className={classes.display}>{displayValue}</h1>
  );
};

export default Display;

