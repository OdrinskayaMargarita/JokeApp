import { createAsyncThunk } from '@reduxjs/toolkit';
import moment from 'moment/moment';

import { ItemJokeList } from '../../types';
import { api } from '../api/api';

export const getRandomJoke = createAsyncThunk<ItemJokeList>('getAnyJoke', async () => {
  const { data } = await api.getRandomJoke();
  if (data.error) throw 'Error';

  return {
    date: moment(new Date()).format('L'),
    delivery: data.delivery ?? '',
    idJoke: data.id,
    isLike: false,
    joke: data.joke ?? '',
    setup: data.setup ?? '',
  };
});
