import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import PageNotFound from './components/PageNotFound';

import s from './App.module.css';

function App() {
  return (
    <>
      <ul className={s.navigations}>
        <li className={s.navigations__item}>
          <NavLink exact className={s.link} activeClassName={s.active} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.navigations__item}>
          <NavLink className={s.link} activeClassName={s.active} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
