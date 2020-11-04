import { createStore, applyMiddleware } from "redux";
import authReducer from "./Reducer";
import thunk from "redux-thunk";

export default createStore(authReducer, applyMiddleware(thunk));
