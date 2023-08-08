import {TIngredient} from "../../utils/types";

export const CART_ITEM_ADD = 'CART_ITEM_ADD';
export const CART_ITEM_REMOVE = 'CART_ITEM_REMOVE';
export const CART_ITEMS_SWAP = 'CART_ITEMS_SWAP';
export const CART_BUN_SET = 'CART_BUN_SET';

type TCartItemAdd = {
  type: typeof CART_ITEM_ADD;
  item: TIngredient;
}

type TCartItemRemove = {
  type: typeof CART_ITEM_REMOVE;
  key: string;
}

type TCartItemsSwap = {
  type: typeof CART_ITEMS_SWAP;
  item1: TIngredient;
  item2: TIngredient;
}

type TCartBunSet = {
  type: typeof CART_BUN_SET;
  bun: TIngredient;
}

export type TCartActions = TCartItemAdd | TCartItemRemove | TCartItemsSwap | TCartBunSet;
