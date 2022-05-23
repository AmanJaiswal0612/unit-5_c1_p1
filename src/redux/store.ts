import {combineReducers, legacy_createStore,applyMiddleware, compose} from "redux";

import thunk from "redux-thunk"
import reducer from "./reducer";





export const store = legacy_createStore(
    reducer,
    applyMiddleware(thunk)
)