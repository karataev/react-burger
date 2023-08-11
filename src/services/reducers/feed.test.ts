import {feedReducer} from "./feed";
import {WS_CONNECT, WS_ON_MESSAGE} from "../actions/feed";


function getInitialState() {
  return {
    orders: [],
    ordersToday: 0,
    ordersTotal: 0,
  }
}

describe('Лента заказов', () => {
  test('Подключение к сокету сбрасывает состояние', () => {
    const initialState = {
      ...getInitialState(),
      ordersToday: 2,
      ordersTotal: 10,
    }
    const result = feedReducer(initialState, {
      type: WS_CONNECT,
      url: 'ws://foo.bar',
    });

    expect(result).toEqual(getInitialState());
  })

  test('Получение сообщения по сокету', () => {
    const order = {
      createdAt: '',
      ingredients: [],
      name: 'Новый заказ',
      number: 1,
      status: 'done',
      updatedAt: '',
      _id: '123',
    }
    const result = feedReducer(getInitialState(), {
      type: WS_ON_MESSAGE,
      orders: [order],
      ordersToday: 1,
      ordersTotal: 2,
    });

    expect(result).toEqual({
      orders: [order],
      ordersToday: 1,
      ordersTotal: 2,
    })
  })
})