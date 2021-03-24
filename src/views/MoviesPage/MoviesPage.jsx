import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Axios from 'axios';
import s from './MoviesPage.module.css';
import API from '../../API/settings';

export default class MoviesPage extends Component {
  state = {
    query: '',
    films: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const response = await API.filmDetailsRequest(this.state.query);
      this.setState({ films: response });
    }
  }

  onSubmit = evt => {
    evt.preventDefault();
  };

  handleInput = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    return (
      <div className={s.container}>
        <input
          className={s.search}
          type="text"
          name="search"
          id="query"
          onChange={this.handleInput}
        />
        <button className={s.submit} type="submit" onClick={this.onSubmit}>
          Search
        </button>
      </div>
    );
  }
}
