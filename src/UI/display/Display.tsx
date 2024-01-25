import React from "react";
import { connect } from "react-redux";
import classes from "./Display.module.css"

const Display = ({ displayValue }) => {
  return (
    <h1 className={classes.display}>{displayValue}</h1>
  );
};

const mapStateToProps = state => ({
  displayValue: state.displayValue
});

export function connect(mapStateToProps)(Display);
