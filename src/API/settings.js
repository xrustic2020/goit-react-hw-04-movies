import axios from 'axios';
// import key from 'apiKey';

const key = '3fb33685800e055b072f7d1be89729ed';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: key,
};

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

async function searchFilms(query) {
  return axios.get(`search/movie?query=${query}&page=1`);
}

async function getTrendingFilms() {
  return axios.get(`trending/movie/day`);
}

async function getOneFilmDetails(id) {
  return axios.get(`movie/${id}?language=en-US`);
}

async function getFilmCast(id) {
  return axios.get(`movie/${id}/credits`);
}

async function getFilmReviews(id) {
  return axios.get(`movie/${id}/reviews`);
}

const API = {
  baseImgUrl,
  getTrendingFilms,
  searchFilms,
  getOneFilmDetails,
  getFilmCast,
  getFilmReviews,
};

export default API;
