import React from "react";
import { connect } from "react-redux";
import classes from "./Display.module.css";

interface DisplayProps {
  displayValue: string;
}

const Display: React.FC<DisplayProps> = ({ displayValue }) => {
  return (
    <h1 className={classes.display}>{displayValue}</h1>
  );
};

const mapStateToProps = (state: any) => ({
  displayValue: state.calculator.displayValue
});

export default connect(mapStateToProps)(Display);

