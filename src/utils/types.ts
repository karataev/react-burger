
export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  key: string;
}

type TName = {
  name: string;
}

type TEmail = {
  email: string;
}

type TPassword = {
  password: string;
}

type TToken = {
  token: string;
}

export type TUpdateUser = {
  name: string;
  email: string;
  password?: string;
}

export type TPasswordToken = TPassword & TToken;
export type TEmailPassword = TEmail & TPassword;
export type TNameEmailPassword = TName & TEmailPassword;