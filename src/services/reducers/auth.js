import {
  SET_USER,
  SET_AUTH_CHECKED,
} from "../actions/auth";

const initialState = {
  user: null, // {name: 'foo', email: 'foo@bar.baz' }
  isAuthChecked: false,
};

export function authReducer(state = initialState, action) {
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