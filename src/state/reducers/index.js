import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

// maping a particular reducer to a particular state

const reducers = combineReducers({
    account: accountReducer
});

export default reducers; 