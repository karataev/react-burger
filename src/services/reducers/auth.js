import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions/auth";

const initialState = {
  isLoading: false,
  errorMessage: '',
};

export function authReducer(state = initialState, action) {
  switch(action.type) {
  case LOGIN_REQUEST: {
    return {
      ...state,
      errorMessage: '',
      isLoading: true,
    };
  }
  case LOGIN_SUCCESS: {
    return {
      ...state,
      isLoading: false,
    }
  }
  case LOGIN_ERROR: {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.message,
    }
  }
  default: {
    return state;
  }
  }
}