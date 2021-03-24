import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import s from './HomePage.module.css';
import API from '../../API/settings';
// import MovieDetailsPage from '../../views/MovieDetailsPage';

export default class HomePage extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const response = await API.trendingRequest();
    // console.log(response.data.results);
    this.setState({ data: response.data.results });
  }

  render() {
    return (
      <div>
        <h1 className={s.heading}>Trending today</h1>
        <ul>
          {this.state.data.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
