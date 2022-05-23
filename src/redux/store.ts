import {combineReducers, legacy_createStore,applyMiddleware, compose} from "redux";

import thunk from "redux-thunk"
import reducer from "./reducer";




import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
export const store = legacy_createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
));



// export const store = legacy_createStore(
//     reducer,
//     applyMiddleware(thunk)
// )