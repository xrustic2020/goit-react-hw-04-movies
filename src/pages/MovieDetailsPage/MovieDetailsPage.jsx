import { useState, useEffect, Suspense } from 'react';
import { Route, Link } from 'react-router-dom';
import Loader from 'components/Loader';
import routes from 'data/routes';
import API from 'API/settings';
import s from './MovieDetailsPage.module.css';
// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';

const MovieDetailsPage = ({
  match: {
    params: { movieId },
  },
  history: { goBack },
}) => {
  const [film, setFilm] = useState('');

  useEffect(() => {
    async function request() {
      const response = await API.getOneFilmDetails(movieId);
      setFilm(response.data);
    }

    if (!film) {
      request();
    }
  }, [movieId, film]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;

  // !!! переделать Жанры в список !!!

  return (
    <div className={s.container}>
      <button className={s.button} type="button" onClick={goBack}>
        Go back
      </button>

      <hr />

      <div className={s.filmInformation}>
        <img
          src={poster_path && `${API.baseImgUrl}${poster_path}`}
          alt={original_title}
          width="300"
          height="450"
        ></img>
        <div className={s.textInformation}>
          <h1>{`${original_title} (${Number.parseInt(release_date)})`}</h1>
          <p>User Score: {10 * vote_average} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres && genres.map(el => <span key={el.id}>{el.name} </span>)}
          </p>
        </div>
      </div>

      <hr />

      <div className={s.addintionalInformation}>
        <Link to={`/movies/${film.id}/cast`}>Cast</Link>
        <Link to={`/movies/${film.id}/reviews`}>Reviews</Link>
      </div>

      <hr />
      <Suspense fallback={<Loader />}>
        {routes.filmsAdditions.map(({ path, exact, component: Component }) => (
          <Route key={path} path={path} exact={exact} component={Component} />
        ))}
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
