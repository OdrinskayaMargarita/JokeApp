import { useEffect } from 'react';

import moment from 'moment';

import { getRandomJoke } from '../actions/joke.action';
import { useAppDispatch, useAppSelector } from '../store/configureStore';

export const useGetTodayJoke = () => {
  const dispatch = useAppDispatch();

  const { listJokes } = useAppSelector(({ joke }) => joke);

  const today = moment(new Date()).format('L');

  const lastItemList = listJokes[listJokes.length - 1];

  useEffect(() => {
    if (!listJokes.length || today !== lastItemList.date) {
      dispatch(getRandomJoke());
    }
  }, []);
};
