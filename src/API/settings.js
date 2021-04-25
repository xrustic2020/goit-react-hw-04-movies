import axios from 'axios';

const KEY = '3fb33685800e055b072f7d1be89729ed';
const baseImgUrl = 'https://image.tmdb.org/t/p/original';

// fetch(
//   'https://api.themoviedb.org/3/search/movie?api_key=3fb33685800e055b072f7d1be89729ed&query=batman&page=1',
// )
//   .then(res => res.json())
//   .then(data => console.log(data));

async function searchFilms(query) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&page=1`,
  );
}

async function getTrendingFilms() {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`,
  );
}

async function getOneFilmDetails(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`,
  );
}

async function getFilmCast(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`,
  );
}

async function getFilmReviews(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`,
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
