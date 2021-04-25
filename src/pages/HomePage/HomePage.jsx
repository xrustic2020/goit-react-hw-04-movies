import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './HomePage.module.css';
import API from '../../API/settings';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function request() {
      const response = await API.getTrendingFilms();
      setData(response.data.results);
    }

    if (data.length === 0) request();
  });

  return (
    <div>
      <h1 className={s.heading}>Trending today</h1>
      <ul>
        {data.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
