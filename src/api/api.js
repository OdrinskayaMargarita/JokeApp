import axios from 'axios';

import { baseUrl } from './config';

export const api = {
  getRandomJoke() {
    return axios({
      method: 'get',
      url: baseUrl + `Any`,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).catch((error) => error);
  },
};
