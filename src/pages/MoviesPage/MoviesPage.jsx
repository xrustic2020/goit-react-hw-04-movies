import { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import s from './MoviesPage.module.css';
import API from 'API/settings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchResult from 'components/SearchResult';

const MoviesPage = () => {
  const location = useLocation();
  const { search } = location;
  const initialQueryState = queryString.parse(search);

  const { push } = useHistory();
  const inputRef = useRef();

  const [query, setQuery] = useState(initialQueryState.query || '');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
    if (query) onSubmit();
  }, []); // eslint-disable-line

  const onSubmit = () => {
    if (!query) return toast.warn('Please enter the title of the movie first');
    push({
      ...location,
      search: `?query=${query}`,
    });

    async function request() {
      const response = await API.searchFilms(query);
      setFilms(response.data.results);
    }
    request();
  };

  return (
    <div className={s.container}>
      <input
        className={s.search}
        type="text"
        name="search"
        value={query}
        ref={inputRef}
        onChange={evt => setQuery(evt.target.value)}
      />
      <button type="submit" className={s.submit} onClick={onSubmit}>
        Search
      </button>

      {films.length > 0 && <SearchResult films={films} query={query} />}
      <ToastContainer />
    </div>
  );
};

export default MoviesPage;
