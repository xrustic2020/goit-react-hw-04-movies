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

  const resetSearchQuery = message => {
    setFilms([]);
    push({
      ...location,
      search: '',
    });
    return toast.warn(message);
  };

  const onSubmit = () => {
    if (!query) {
      return resetSearchQuery('Please enter the title of the movie first');
    }

    async function request() {
      const response = await API.searchFilms(query);
      if (!response.data.total_results) {
        return resetSearchQuery(
          `No results were found for "${query}". Try searching again`,
        );
      }

      setFilms(response.data.results);
    }
    request();
    push({
      ...location,
      search: `?query=${query}`,
    });
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
