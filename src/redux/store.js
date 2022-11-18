import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { filterReducer } from './filterSlice';
import { contactSliceReducer } from './contactSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducerContacts = persistReducer(
  persistConfig,
  contactSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducerContacts,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
