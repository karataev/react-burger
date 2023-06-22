import {checkResponse} from "../utils/utils";
import storage from "../utils/storage";

const NORMA_API = 'https://norma.nomoreparties.space/api';

export function fetchIngredientsApi() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
}

function getWithAuth(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': storage.get('accessToken'),
    }
  })
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
  return post(`${NORMA_API}/orders`, {
    ingredients: ids,
  });
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
  return getWithAuth(`${NORMA_API}/auth/user`);
}

export function logoutApi() {
  return post(`${NORMA_API}/auth/logout`, {
    token: storage.get('refreshToken'),
  });
}

