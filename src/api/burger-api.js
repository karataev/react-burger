import {checkResponse} from "../utils/utils";

const NORMA_API = 'https://norma.nomoreparties.space/api';

export function fetchIngredientsApi() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
}

export function createOrderApi(ids) {
  const body = JSON.stringify({
    ingredients: ids,
  })
  return fetch(`${NORMA_API}/orders`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body
  })
    .then(checkResponse)
}