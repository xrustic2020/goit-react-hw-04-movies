import axios from 'axios';

// Ключ API (v3 auth)
const KEY = '3fb33685800e055b072f7d1be89729ed';

// Пример API-запроса
// const query =
//   'https://api.themoviedb.org/3/movie/550?api_key=3fb33685800e055b072f7d1be89729ed';

// Ключ доступа к API (v4 auth)
// const key2 =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmIzMzY4NTgwMGUwNTViMDcyZjdkMWJlODk3MjllZCIsInN1YiI6IjYwNWI1ZTIwZGQ0N2UxMDAyOGZlODIyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.so1szUgRZcuLyx_52kJ7Yd3FA_4g0O8GSaNZUKJKVZQ';

// const sendRequest =
//   'https://api.themoviedb.org/3/trending/movie/day?api_key=3fb33685800e055b072f7d1be89729ed';

// const a = fetch(
//   'https://api.themoviedb.org/3/movie/615457?api_key=3fb33685800e055b072f7d1be89729ed&language=en-US',
// )
//   .then(res => res.json())
//   .then(data => console.log(data));

// const film = {
//   backdrop_path: '',
//   poster_path: '',
//   original_title: 'название',
//   release_date: 'дата релиза', // нам нужен только год
//   vote_average: 'рейтинг 8.6', // это наш User Score (нужен в процентах)
//   overview: 'описание',
//   genres: ['жанры', 'фильма'],
// };
//image.tmdb.org/t/p/original

async function searchFilms(query) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
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

const API = { getTrendingFilms, searchFilms, getOneFilmDetails };

export default API;
