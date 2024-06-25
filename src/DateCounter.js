import { useReducer, useState } from "react";
function reducer(state, action) {
  console.log(state, action);
  // return { count: 0, setStep: 1 };
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.setStep };
    case "dec":
      return { ...state, count: state.count - state.setStep };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, setStep: action.payload };
    case "reset":
      return { count: 0, setStep: 1 };
    default:
      throw new Error("Invalid action type");
  }

  // if (action.type === "setCount") return action.payload + 1;
}
function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const initialState = { count: 0, setStep: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // This mutates the date object.

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input type="number" value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
