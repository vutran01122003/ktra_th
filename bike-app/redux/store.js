import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import bikeReducer from "./bikeReducer";

const store = createStore(bikeReducer, applyMiddleware(thunk));

export default store;
