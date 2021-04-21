import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const routes = [
  {
    path: '/',
    label: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/movies',
    label: 'Movies Page',
    component: MoviesPage,
    exact: true,
  },
  {
    path: '/movies/:movieId',
    label: 'Movie Details',
    component: MovieDetailsPage,
    exact: false,
  },
  {
    path: '/movies/:movieId/cast',
    label: 'Movie Cast',
    component: MovieDetailsPage,
    exact: true,
  },
  {
    path: '/movies/:movieId/reviews',
    label: 'Movie Reviews',
    component: MovieDetailsPage,
    exact: true,
  },
];

export default routes;
