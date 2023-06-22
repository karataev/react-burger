import {loginApi, registerApi} from "../../api/norma-api";
import storage from "../../utils/storage";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const SET_USER = 'SET_USER';

export function login({email, password}) {
  return async function(dispatch) {
    dispatch({type: LOGIN_REQUEST});

    try {
      const result = await loginApi({email, password});
      const {user, accessToken, refreshToken} = result;
      storage.set('accessToken', accessToken);
      storage.set('refreshToken', refreshToken);
      dispatch({type: LOGIN_SUCCESS, user});
    } catch (e) {
      dispatch({type: LOGIN_ERROR, message: e.message});
    }
  }
}

export function register({name, email, password}) {
  return async function(dispatch) {
    dispatch({type: LOGIN_REQUEST});

    try {
      const result = await registerApi({name, email, password});
      const {user, accessToken, refreshToken} = result;
      storage.set('accessToken', accessToken);
      storage.set('refreshToken', refreshToken);
      dispatch({type: REGISTER_SUCCESS, user});
    } catch (e) {
      dispatch({type: REGISTER_ERROR, message: e.message});
    }
  }
}
