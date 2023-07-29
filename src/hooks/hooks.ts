import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from 'react-redux';
import {AppDispatch, AppThunk, RootState} from "../services/store";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

// @ts-ignore
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
