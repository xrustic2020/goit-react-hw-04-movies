import { Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import routes from 'data/routes';
import Loader from 'components/Loader';
// import { ToastContainer } from 'react-toastify';

import s from './App.module.css';

const App = () => {
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
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.app.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
