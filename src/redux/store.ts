import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tvReducer from './slices/tvSlice';

export const store = configureStore({
  reducer: {
    tv: tvReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
