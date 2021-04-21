import { useState, useEffect } from 'react';
import API from '../../API/settings';
// import Axios from 'axios';
// import API from '../../API/settings';

// const im = { original_title: 'Imitation test' };

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

const MovieDetailsPage = ({
  match: {
    params: { movieId },
  },
}) => {
  const [film, setFilm] = useState('');
  console.log(movieId);

  useEffect(() => {
    async function request() {
      const response = await API.getOneFilmDetails(movieId);
      console.log(response.data);
      setFilm(response.data);
    }

    if (!film) {
      console.log('запрашиваем данные о фильме');
      request();
    }

    // API.getOneFilmDetails(movieId);
    // return () => {
    //   console.log('unmount');
    // };
  }, [movieId, film]);

  const {
    // backdrop_path,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;

  // console.log(poster_path);
  // console.log(original_title);
  // console.log(release_date);
  // console.log(vote_average);
  // console.log(overview);
  // console.log(genres);

  return (
    <>
      <button type="button">Go back</button>
      <div className="filmInformation">
        <img
          src={`${baseImgUrl}${poster_path}`}
          alt={original_title}
          width="200"
        ></img>
        <div className="textInformation">
          <h1>{`${original_title} (${release_date})`}</h1>
          <p>User Score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>genres...</p> {/* // {genres} */}
        </div>
      </div>
      <div className="addintionalInformation"></div>
      {/* <h1>Страница одного фильма</h1>
      {film && <p>{original_title}</p>} */}
    </>
  );
};
// class MovieDetailsPage extends Component {
//   state = {
//     descr: null,
//     genre: null,
//     id: null,
//     imgUrl: null,
//     title: null,
//     author: null,
//   };

//   // async componentDidMount() {
//   //   const { bookId } = this.props.match.params;
//   //   const response = await Axios.get(
//   //     `http://localhost:4040/books/${bookId}?_expand=author`,
//   //   );

//   //   this.setState({ ...response.data });
//   // }

//   render() {
//     return (
//       <>
//         <h1>Страница одного фильма</h1>
//       </>
//     );
//   }
// }

export default MovieDetailsPage;
