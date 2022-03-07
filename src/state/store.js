import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

// creating the store using reducers and middleware( for asynchronous processing)

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);

export default store;