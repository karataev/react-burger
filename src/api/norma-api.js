import {checkResponse} from "../utils/utils";
import storage from "../utils/storage";

const NORMA_API = 'https://norma.nomoreparties.space/api';

export const refreshToken = () => {
  return post(`${NORMA_API}/auth/token`, {
    token: storage.get('refreshToken'),
  });
};

const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      storage.set("refreshToken", refreshData.refreshToken);
      storage.set("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export function fetchIngredientsApi() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
}

function post(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(checkResponse)
}

export function createOrderApi(ids) {
  return fetchWithRefresh(`${NORMA_API}/orders`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      authorization: storage.get('accessToken')
    },
    body: JSON.stringify({
      ingredients: ids,
    })
  })
}

export function resetPasswordApi(email) {
  return post(`${NORMA_API}/password-reset`, {email});
}

export function confirmResetPasswordApi({password, token}) {
  return post(`${NORMA_API}/reset`, {password, token});
}

export function loginApi({email, password}) {
  return post(`${NORMA_API}/auth/login`, {email, password});
}

export function registerApi({name, email, password}) {
  return post(`${NORMA_API}/auth/register`, {name, email, password});
}

export function getUserApi() {
  return fetchWithRefresh(`${NORMA_API}/auth/user`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      authorization: storage.get('accessToken')
    }
  });
}

export function logoutApi() {
  return post(`${NORMA_API}/auth/logout`, {
    token: storage.get('refreshToken'),
  });
}

