import {combineReducers} from "redux";
import {cartReducer} from "./cart";
import {ingredientsReducer} from "./ingredients";

export default combineReducers({
  ingredients: ingredientsReducer,
  cart: cartReducer,
})
