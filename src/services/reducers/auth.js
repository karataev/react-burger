import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "../actions/auth";

const initialState = {
  isLoading: false,
  errorMessage: '',
  user: null, // {name: 'foo', email: 'foo@bar.baz' }
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
      // todo
    }
  }
  case LOGIN_ERROR: {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.message,
    }
  }
  case REGISTER_REQUEST: {
    return {
      ...state,
      isLoading: true,
      errorMessage: '',
    }
  }
  case REGISTER_SUCCESS: {
    return {
      ...state,
      isLoading: false,
      user: action.user,
    }
  }
  case REGISTER_ERROR: {
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