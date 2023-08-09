import {authReducer} from "./auth";
import {SET_AUTH_CHECKED, SET_USER} from "../actions/auth";

function getInitialState() {
  return {
    user: null,
    isAuthChecked: false,
  }
}

describe('Аутентификация', () => {
  test('Установка пользователя', () => {
    const user = {
      name: 'Jack',
      email: 'jack@example.com'
    };
    const result = authReducer(getInitialState(), {
      type: SET_USER,
      user
    })

    expect(result).toEqual({
      user,
      isAuthChecked: false,
    });
  });

  test('Аутентификация прошла', () => {
    const result = authReducer(getInitialState(), {
      type: SET_AUTH_CHECKED,
      payload: true,
    });

    expect(result).toEqual({
      user: null,
      isAuthChecked: true,
    })
  })
})