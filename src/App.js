import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  /* Extract the counter for the store */
  return (
    <div className="App">
      <h1>Hello! Counter is {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Data I should not see!</h3> : ""}
      {/* Use useSelector hook */}
    </div>
  );
}

export default App;
