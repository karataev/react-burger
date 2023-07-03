import {getUserApi, loginApi, registerApi} from "../../api/norma-api";
import storage from "../../utils/storage";

export const SET_USER = 'SET_USER';
export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED';

export function checkUserAuth() {
  return async function(dispatch) {
    if (storage.get('accessToken')) {
      try {
        const result = await getUserApi();
        dispatch({type: SET_USER, user: result.user});
      } catch (e) {
        storage.clear();
      }
      dispatch({type: SET_AUTH_CHECKED, payload: true});
    } else {
      dispatch({type: SET_AUTH_CHECKED, payload: true});
    }
  }
}

export function login({email, password}) {
  return async function(dispatch) {
    const result = await loginApi({email, password});
    const {user, accessToken, refreshToken} = result;
    storage.set('accessToken', accessToken);
    storage.set('refreshToken', refreshToken);
    dispatch({type: SET_USER, user});
  }
}

export function register({name, email, password}) {
  return async function(dispatch) {
    const result = await registerApi({name, email, password});
    const {user, accessToken, refreshToken} = result;
    storage.set('accessToken', accessToken);
    storage.set('refreshToken', refreshToken);
    dispatch({type: SET_USER, user});
  }
}
