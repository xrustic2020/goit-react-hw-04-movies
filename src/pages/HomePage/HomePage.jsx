import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './HomePage.module.css';
import API from '../../API/settings';
// import MovieDetailsPage from '../../views/MovieDetailsPage';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function request() {
      const response = await API.getTrendingFilms();
      setData(response.data.results);
    }
    // console.log('data lenght:', data.length);
    if (data.length === 0) {
      // console.log('массив пуст! Делаем запрос данных');
      request();
    }
    // return () => {
    //  setData([]);
    // };
  });

  return (
    <div>
      <h1 className={s.heading}>Trending today</h1>
      <ul>
        {data.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// class HomePage extends Component {
//   state = {
//     data: [],
//   };

//   async componentDidMount() {
//     const response = await API.trendingRequest();
//     // console.log(response.data.results);
//     this.setState({ data: response.data.results });
//   }

//   render() {
//     return (
//       <div>
//         <h1 className={s.heading}>Trending today</h1>
//         <ul>
//           {this.state.data.map(film => (
//             <li key={film.id}>
//               <Link to={`/movies/${film.id}`}>{film.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default HomePage;
