import React, { Component } from 'react';
// import Axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  // async componentDidMount() {
  //   const { bookId } = this.props.match.params;
  //   const response = await Axios.get(
  //     `http://localhost:4040/books/${bookId}?_expand=author`,
  //   );

  //   this.setState({ ...response.data });
  // }

  render() {
    return (
      <>
        <h1>Страница одной фильма</h1>
      </>
    );
  }
}

export default MovieDetailsPage;
