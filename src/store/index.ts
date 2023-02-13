import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import loadingSlice from './slices/loadingSlice';
import { apiServices } from './services/restApiServices';
import usersSlice from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    usersList: usersSlice,
    [apiServices.reducerPath]: apiServices.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
