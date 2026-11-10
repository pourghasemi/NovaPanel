import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './slices/usersSlice';
import productsReducer from './slices/productsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;