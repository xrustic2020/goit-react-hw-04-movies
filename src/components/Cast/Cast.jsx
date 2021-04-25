import { useState, useEffect } from 'react';
import API from 'API/settings';
import s from './Cast.module.css';

const Cast = ({
  match: {
    params: { movieId },
  },
}) => {
  const [cast, setCast] = useState('');

  useEffect(() => {
    async function request() {
      const response = await API.getFilmCast(movieId);
      setCast(response.data.cast);
    }

    if (!cast) {
      request();
    }
  }, [movieId, cast]);

  return (
    <>
      <h2>Cast</h2>
      <ul className={s.castList}>
        {cast &&
          cast.map(el => (
            <li key={el.id}>
              <img
                width="200"
                src={el.profile_path && `${API.baseImgUrl}${el.profile_path}`}
                alt={el.name}
              />
              <p>{el.name}</p>
              <p>{el.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
