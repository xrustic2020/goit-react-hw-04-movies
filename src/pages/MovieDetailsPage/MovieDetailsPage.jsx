import { useState, useEffect, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'components/Loader';
import routes from 'data/routes';
import API from 'API/settings';
import s from './MovieDetailsPage.module.css';
import NavBar from 'components/NavBar';

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

  return (
    <div className={s.container}>
      <button className={s.button} type="button" onClick={goBack}>
        Go back
      </button>

      <div className={s.filmInformation}>
        <img
          src={poster_path && `${API.baseImgUrl}${poster_path}`}
          alt={original_title}
          width="300"
          height="450"
        />
        <div className={s.textInformation}>
          <h1>{`${original_title} (${Number.parseInt(release_date)})`}</h1>
          <p>User Score: {10 * vote_average} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul className={s.genresList}>
            {genres && genres.map(el => <li key={el.id}>{el.name}</li>)}
          </ul>
        </div>
      </div>

      <NavBar
        data={routes.link.getAdditional(film.id)}
        additionalClass={s.border}
      />

      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.filmsAdditions.map(({ path, exact, component: Component }) => (
          <Route key={path} path={path} exact={exact} component={Component} />
        ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
