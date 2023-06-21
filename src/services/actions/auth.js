import {loginApi} from "../../api/norma-api";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login({email, password}) {
  return async function(dispatch) {
    dispatch({type: LOGIN_REQUEST});

    try {
      await loginApi({email, password});
      dispatch({type: LOGIN_SUCCESS});
    } catch (e) {
      dispatch({type: LOGIN_ERROR, message: e.message});
    }
  }
}