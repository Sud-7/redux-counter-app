import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  decrementbyAmount,
  increment,
  incrementbyAmount,
  reset,
} from "./redux/slice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();
  const counter = useSelector((state) => state.counterApp.counts);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementbyAmount(parseInt(amount)));
    setAmount(0);
  };

  const handleClickdecrement = () => {
    dispatch(decrementbyAmount(parseInt(amount)));
    setAmount(0);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <br></br>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <input
          type="text"
          value={amount}
          placeholder="Enter Amount to increase/decrease"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleClick}>Increase by Amount</button>
        <button onClick={handleClickdecrement}>Decrease by Amount</button>
      </div>
    </div>
  );
}

export default App;
