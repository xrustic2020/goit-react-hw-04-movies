import React from 'react';
import s from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <>
      <h2 className={s.heading}>404 Page not found</h2>
      <h2 className={s.heading}>Упс... такая страница не найдена</h2>
    </>
  );
}
