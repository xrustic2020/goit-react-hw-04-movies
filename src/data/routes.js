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
const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "Reviews" */),
);

const app = [
  {
    path: '/',
    label: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/movies/:movieId',
    label: 'Movie Details',
    component: MovieDetailsPage,
    exact: false,
  },
  {
    path: '/movies',
    label: 'Movies Page',
    component: MoviesPage,
    exact: false,
  },
];

const filmsAdditions = [
  {
    path: '/movies/:movieId/cast',
    label: 'Movie Cast',
    component: Cast,
    exact: true,
  },
  {
    path: '/movies/:movieId/reviews',
    label: 'Movie Reviews',
    component: Reviews,
    exact: true,
  },
];

const link = {
  navigation: [
    {
      path: '/',
      label: 'Home',
      exact: true,
    },
    {
      path: '/movies',
      label: 'Movies',
      exact: false,
    },
  ],

  getAdditional(id) {
    return [
      {
        path: `/movies/${id}/cast`,
        label: 'Cast',
        exact: false,
      },
      {
        path: `/movies/${id}/reviews`,
        label: 'Reviews',
        exact: false,
      },
    ];
  },
};

const routes = {
  app,
  filmsAdditions,
  link,
};

export default routes;
