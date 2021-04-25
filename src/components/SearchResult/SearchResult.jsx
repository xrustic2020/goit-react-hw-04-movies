import { Link, useLocation } from 'react-router-dom';

const SearchResult = ({ films, query }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <ul>
      {films.map(el => (
        <li key={el.id}>
          <Link
            to={{
              pathname: `${pathname}/${el.id}`,
              state: {
                query,
              },
            }}
          >
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;
