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

async function filmDetailsRequest(query) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
}

async function trendingRequest() {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`,
  );
}

const API = { trendingRequest, filmDetailsRequest };

export default API;
