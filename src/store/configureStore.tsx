import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { IStore } from '../../types';
import { jokeSlice } from '../reducers/joke.slice';

const combinedReducer = combineReducers({
  joke: jokeSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const rootReducer = (state: IStore | undefined, action: PayloadAction<string>) => {
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
