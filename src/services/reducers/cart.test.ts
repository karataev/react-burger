import {cartReducer} from "./cart";
import {CART_BUN_SET, CART_ITEM_ADD, CART_ITEM_REMOVE} from "../actions/cart";
import {TIngredient} from "../../utils/types";

jest.mock('uuid', () => ({
  v4: () => '123'
}));

function getInitialState() {
  return {
    cartBun: null,
    cartItems: [],
  }
}

const bun: TIngredient = {
  _id: '1',
  key: '1',
  name: 'Булка',
  proteins: 1,
  fat: 1,
  carbohydrates: 1,
  calories: 1,
  price: 1,
  image: '',
  image_mobile: '',
  image_large: '',
  type: 'bun',
}

const ingredient = {
  ...bun,
  type: 'main',
}

describe('Корзина', () => {
  test('Выбор булки', () => {
    const result = cartReducer(getInitialState(), {
      type: CART_BUN_SET,
      bun
    });

    expect(result).toEqual({
      cartBun: bun,
      cartItems: [],
    })
  });

  test('Добавление ингредиента', () => {
    const result = cartReducer(getInitialState(), {
      type: CART_ITEM_ADD,
      item: ingredient,
    });

    expect(result).toEqual({
      cartBun: null,
      cartItems: [
        {
          ...ingredient,
          key: '123',
        },
      ]
    })
  });

  test('Удаление ингредиента', () => {
    const initialState = {
      cartBun: null,
      cartItems: [ingredient],
    }
    const result = cartReducer(initialState, {
      type: CART_ITEM_REMOVE,
      key: ingredient.key,
    });

    expect(result).toEqual({
      cartBun: null,
      cartItems: [],
    })
  });
})