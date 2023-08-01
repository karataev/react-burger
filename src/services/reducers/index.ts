import {combineReducers} from "redux";
import {cartReducer} from "./cart";
import {ingredientsReducer} from "./ingredients";
import {orderReducer} from "./order";
import {authReducer} from "./auth";
import {feedReducer} from "./feed";

export default combineReducers({
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
  feed: feedReducer,
})
