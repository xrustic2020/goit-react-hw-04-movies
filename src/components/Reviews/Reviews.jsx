import { useState, useEffect } from 'react';
import API from 'API/settings';

const Reviews = ({
  match: {
    params: { movieId },
  },
}) => {
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    async function request() {
      const response = await API.getFilmReviews(movieId);
      setReviews(response.data.results);
    }

    if (!reviews) {
      request();
    }
  }, [movieId, reviews]);

  return (
    <ul>
      {reviews > 0 ? (
        reviews.map(el => (
          <li key={el.id}>
            <h3>Author: {el.author}</h3>
            <p>{el.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
