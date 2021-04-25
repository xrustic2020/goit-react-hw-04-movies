import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <div className={s.heading}>
      <h2>404 Page not found</h2>
      <h2>Упс... такая страница не найдена</h2>
      <NavLink to="/" activeClassName={s.button}>
        Go Home
      </NavLink>
    </div>
  );
}
