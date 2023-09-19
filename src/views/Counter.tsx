import { useReducer } from "react";

interface CounterState {
  count: number;
}

interface CounterAction {
  type: string;
  count?: number;
}

function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setCount":
      if (action.count !== undefined) {
        return { ...state, count: action.count };
      }
      return state;
    default:
      throw new Error("Unknown action type");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  });

  const { count } = state;

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  function handleSetCount() {
    const newCount = parseInt(prompt("Enter new count:", "0") || "0", 10);
    dispatch({ type: "setCount", count: newCount });
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSetCount}>Set Count</button>
    </div>
  );
}

export default Counter;
