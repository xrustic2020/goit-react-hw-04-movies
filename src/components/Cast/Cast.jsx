import { useState, useEffect, useRef } from 'react';
import API from 'API/settings';
import s from './Cast.module.css';
import scrolling from 'utils/scrolling';

const Cast = ({
  match: {
    params: { movieId },
  },
}) => {
  const [cast, setCast] = useState('');
  const castListRef = useRef();

  useEffect(() => {
    async function request() {
      const response = await API.getFilmCast(movieId);
      setCast(response.data.cast);
      scrolling(castListRef);
    }

    if (!cast) {
      request();
    }
  }, [movieId, cast]);

  return (
    <ul className={s.castList} ref={castListRef}>
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
  );
};

export default Cast;
