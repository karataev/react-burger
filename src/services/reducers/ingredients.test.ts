import {ingredientsReducer} from "./ingredients";
import {
  CLEAR_SELECTED_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SET_SELECTED_INGREDIENT
} from "../actions/ingredients";

function getInitialState() {
  return {
    ingredients: [],
    ingredientsLoading: false,
    ingredientsError: false,
    selectedIngredient: null,
  }
}

const ingredient = {
  _id: '1',
  key: '1',
  name: 'Мясо',
  proteins: 1,
  fat: 1,
  carbohydrates: 1,
  calories: 1,
  price: 1,
  image: '',
  image_mobile: '',
  image_large: '',
  type: 'main',
}

describe('Ингредиенты', () => {
  test('Запрос на получение списка ингредиентов', () => {
    const result = ingredientsReducer(getInitialState(), {
      type: GET_INGREDIENTS_REQUEST
    });

    expect(result).toEqual({
      ...getInitialState(),
      ingredientsLoading: true,
    })
  });

  test('Список ингредиентов получен успешно', () => {
    const ingredients = [ingredient]
    const result = ingredientsReducer(getInitialState(), {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients,
    });
    expect(result).toEqual({
      ...getInitialState(),
      ingredients,
    })
  });

  test('Ошибка при получении ингредиентов', () => {
    const result = ingredientsReducer(getInitialState(), {
      type: GET_INGREDIENTS_FAILED,
    });

    expect(result).toEqual({
      ...getInitialState(),
      ingredientsError: true,
    })
  })

  test('Выбор ингредиента', () => {
    const result = ingredientsReducer(getInitialState(), {
      type: SET_SELECTED_INGREDIENT,
      selectedIngredient: ingredient,
    });

    expect(result).toEqual({
      ...getInitialState(),
      selectedIngredient: ingredient,
    })
  })

  test('Сброс выбранного ингредиента', () => {
    const initialState = {
      ...getInitialState(),
      selectedIngredient: ingredient,
    }
    const result = ingredientsReducer(initialState, {
      type: CLEAR_SELECTED_INGREDIENT,
    });

    expect(result).toEqual(getInitialState());
  })
})