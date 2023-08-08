import {
  SET_USER,
  SET_AUTH_CHECKED, TAuthActions,
} from "../actions/auth";
import {TUser} from "../../utils/types";

type TAuthState = {
  user: TUser | null;
  isAuthChecked: boolean;
}

const initialState: TAuthState = {
  user: null,
  isAuthChecked: false,
};

export function authReducer(state = initialState, action: TAuthActions) {
  switch(action.type) {
  case SET_USER: {
    return {
      ...state,
      user: action.user,
    }
  }
  case SET_AUTH_CHECKED: {
    return {
      ...state,
      isAuthChecked: action.payload,
    }
  }
  default: {
    return state;
  }
  }
}