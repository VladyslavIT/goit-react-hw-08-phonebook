import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authApi } from './auth/authApi';
import { persistedReducer } from './auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    filter: filterReducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(contactsApi.middleware)
      .concat(authApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
