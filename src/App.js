import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import routes from 'data/routes';
import Loader from 'components/Loader';
import NavBar from 'components/NavBar';

import s from './App.module.css';

const App = () => {
  return (
    <>
      <NavBar data={routes.link.navigation} additionalClass={s.shadow} />
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
