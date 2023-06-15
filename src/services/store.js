import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancers);
