
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

export type TDropItem = {
  ingredient: TIngredient;
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

export type TUpdateUser = TName & TEmail & {
  password?: string;
}

export type TResetPassword = TPassword & TToken;
export type TLoginUser = TEmail & TPassword;
export type TRegisterUser = TName & TLoginUser;

export type TUser = {
  name: string;
  email: string;
}

export type TOrder = {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}
