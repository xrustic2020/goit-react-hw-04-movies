import axios from 'axios';
import key from 'apiKey';

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

async function searchFilms(query) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=1`,
  );
}

async function getTrendingFilms() {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
  );
}

async function getOneFilmDetails(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
  );
}

async function getFilmCast(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`,
  );
}

async function getFilmReviews(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}`,
  );
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
