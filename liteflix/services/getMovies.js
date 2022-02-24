import axios from 'axios';

export const getMovies = async () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20',
    )
    .then(res => res.data);
};

export const getPopularMovies = async () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20',
    )
    .then(res => res.data);
};
