import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStore, ItemJokeList } from '../../types';
import { getRandomJoke } from '../actions/joke.action';

const initialState = {
  listJokes: [],
} as IStore['joke'];

export const jokeSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(
      getRandomJoke.fulfilled,
      (state: IStore['joke'], action: PayloadAction<ItemJokeList>) => {
        state.listJokes = [...state.listJokes, action.payload];
      },
    );
  },
  initialState,
  name: 'joke',
  reducers: {
    handleLikeChange(state: IStore['joke'], action: PayloadAction<number>) {
      state.listJokes = state.listJokes.map((listItem) =>
        listItem.idJoke === action.payload ? { ...listItem, isLike: !listItem.isLike } : listItem,
      );
    },
  },
});

export const { handleLikeChange } = jokeSlice.actions;
