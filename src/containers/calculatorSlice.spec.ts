import { clearAll, clearDisplay, setDisplay } from "../containers/calculatorSlice"
import calculatorReducer, {
    CalculatorState,
  } from "./calculatorSlice"

//   value: number, 
//   displayValue: string, 
//   operator: string,
//   waitingForNumber: boolean,
//   status: "idle" | "loading" | "failed"

  describe("calculator reducer", () => {
    const initialState: CalculatorState = {
      value: '3',
      displayValue: '3',
      operator:"PLUS",
      waitingForNumber:false
    }
    it("should handle initial state", () => {
      expect(calculatorReducer(undefined, { type: "unknown" })).toEqual({
        value: '0',
        displayValue: '0',
        operator:"",
        waitingForNumber:true
      })
    })
  
    it("should handle clearDisplay", () => {
      const actual = calculatorReducer(initialState, clearDisplay())
      expect(actual.displayValue).toEqual('0')
    })
  
    it("should handle clearAll", () => {
      const actual = calculatorReducer(initialState, clearAll())
      expect(actual).toEqual({
        value: 0,
        displayValue: '0',
        operator:"",
        waitingForNumber:true
        }
      )
    })
  
    it("should handle setDisplay", () => {
      const actual = calculatorReducer(initialState, setDisplay('3'))
      expect(actual.displayValue).toEqual('3')
    })
  })
  