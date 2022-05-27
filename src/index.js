import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import { configureStore } from "redux";

// STORE --> GLOBALIZED STATE STORING ALL APP DATA
const store = configureStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// ACTION --> DESCRIBES WHAT WE WANT TO DO WITH THE DATA i.e. increment, decrement etc. FUNCTION RETURNING AN OBJECT
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
// REDUCER --> HOW THE ACTION MUTATES
const counter = (state = 0, action) => {
  // ADD A COUNTER -- how the initial state will look like
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return;
  }
};

/* let store = createStore(counter);
// DISPATCH --> SEND ACTION (function with an object) TO THE REDUCER. REDUCER WILL TAKE A LOOK AT WHAT WAS DISPATCHED.
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
