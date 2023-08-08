import {applyMiddleware, createStore, compose, ActionCreator, Action} from "redux";
import rootReducer from "./reducers";
import thunk, {ThunkAction} from "redux-thunk";
import {TAuthActions} from "./actions/auth";
import {TCartActions} from "./actions/cart";
import {TIngredientsActions} from "./reducers/ingredients";
import {TOrderActions} from "./reducers/order";
import {socketMiddleware} from "./middleware/socket-middleware";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(socketMiddleware())
);

export const store = createStore(rootReducer, enhancers);

export type RootState = ReturnType<typeof store.getState>

type TAppActions =  TAuthActions | TCartActions | TIngredientsActions |TOrderActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TAppActions>>;

export type AppDispatch = typeof store.dispatch;
