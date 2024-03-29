import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk, store } from "../app/store"

export interface CalculatorState {
  value: string, 
  displayValue: string, 
  operator: string,
  waitingForNumber: boolean
}

const initialState: CalculatorState = {
    value: '0',
    displayValue: '0',
    operator: '',
    waitingForNumber: false
}

export type SetNumberType = {
    displayValue: string,
    waitingForNumber: boolean
}

export type DoMathType = {
    value: string, 
    displayValue: string, 
    operator: string,
    waitingForNumber: boolean
}


export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,

  reducers: {
    clearDisplay: (state) => {
        state.displayValue = '0';
        console.log("cyka")
    }, 
    clearAll: (state) => {
      state.displayValue = '0';
      state.value = '0';
      state.waitingForNumber = false
      state.operator='';
    },
    setDisplay: (state, action: PayloadAction<string>) => {
        state.displayValue = action.payload;
    },
    setNumber: (state, action: PayloadAction<SetNumberType>) => {
        state.displayValue = action.payload.displayValue;
        state.waitingForNumber = action.payload.waitingForNumber;
    },
    doMath: (state, action: PayloadAction<DoMathType>) => {
        state.value = action.payload.value;
        state.displayValue = action.payload.displayValue;
        state.operator = action.payload.operator;
        state.waitingForNumber = action.payload.waitingForNumber;
    }

  }
})
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.


export const { clearDisplay, clearAll, setDisplay, setNumber, doMath} = calculatorSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCalculator = (state: RootState) => state.calculator.value



export default calculatorSlice.reducer
