import {getUserApi, loginApi, registerApi} from "../../api/norma-api";
import storage from "../../utils/storage";
import {TLoginUser, TRegisterUser, TUser} from "../../utils/types";
import {AppDispatch, AppThunk} from "../store";

export const SET_USER = 'SET_USER';
export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED';

type TSetUserAction = {
  type: typeof SET_USER;
  user: TUser;
}

type TSetAuthChecked = {
  type: typeof SET_AUTH_CHECKED;
  payload: boolean;
}

export type TAuthActions = TSetUserAction | TSetAuthChecked;

export const checkUserAuth: AppThunk = () => {
  return async function(dispatch: AppDispatch) {
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

export const login: AppThunk = ({email, password}: TLoginUser) => {
  return async function(dispatch: AppDispatch) {
    const result = await loginApi({email, password});
    const {user, accessToken, refreshToken} = result;
    storage.set('accessToken', accessToken);
    storage.set('refreshToken', refreshToken);
    dispatch({type: SET_USER, user});
  }
}

export const register: AppThunk = ({name, email, password}: TRegisterUser) => {
  return async function(dispatch: AppDispatch) {
    const result = await registerApi({name, email, password});
    const {user, accessToken, refreshToken} = result;
    storage.set('accessToken', accessToken);
    storage.set('refreshToken', refreshToken);
    dispatch({type: SET_USER, user});
  }
}
