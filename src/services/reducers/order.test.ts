import {orderReducer} from "./order";
import {CREATE_ORDER_FAILED, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS} from "../actions/order";

function getInitialState() {
  return {
    isLoading: false,
    errorMessage: '',
    orderNumber: null,
  }
}

describe('Заказ', () => {
  test('Запрос на создание заказа', () => {
    const result = orderReducer(getInitialState(), {
      type: CREATE_ORDER_REQUEST,
    });

    expect(result).toEqual({
      ...getInitialState(),
      isLoading: true,
    })
  })

  test('Создание заказа - успех', () => {
    const result = orderReducer(getInitialState(), {
      type: CREATE_ORDER_SUCCESS,
      orderNumber: 42,
    });

    expect(result).toEqual({
      ...getInitialState(),
      orderNumber: 42,
    })
  })

  test('Ошибка при создании заказа', () => {
    const result = orderReducer(getInitialState(), {
      type: CREATE_ORDER_FAILED,
      errorMessage: 'Всё пропало',
    });

    expect(result).toEqual({
      ...getInitialState(),
      errorMessage: 'Всё пропало',
    })
  })
})