import {checkResponse} from "../utils/utils";

const NORMA_API = 'https://norma.nomoreparties.space/api';

export function fetchIngredientsApi() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
}