import { RootState } from "../app/store";

export const selectDisplayValue = (state: RootState) => state.calculator.displayValue
export const selectValue = (state: RootState) => state.calculator.value
export const selectOperator = (state: RootState) => state.calculator.operator
export const selectWaitingForNumber = (state: RootState) => state.calculator.waitingForNumber
