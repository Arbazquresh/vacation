import { createStore, combineReducers } from "redux";
import { senddataReducer } from "../reducer/senddataReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ senddataReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
