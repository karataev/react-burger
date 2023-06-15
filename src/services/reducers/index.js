import {combineReducers} from "redux";
import {cartReducer} from "./cart";
import {ingredientsReducer} from "./ingredients";
import {orderReducer} from "./order";

export default combineReducers({
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
})
