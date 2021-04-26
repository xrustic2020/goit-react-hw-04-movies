import { useState, useEffect, useRef } from 'react';
import API from 'API/settings';
import s from './Reviews.module.css';
import scrolling from 'utils/scrolling';

const Reviews = ({
  match: {
    params: { movieId },
  },
}) => {
  const [reviews, setReviews] = useState('');
  const reviewsListRef = useRef();

  useEffect(() => {
    async function request() {
      const response = await API.getFilmReviews(movieId);
      setReviews(response.data.results);
      scrolling(reviewsListRef);
    }

    if (!reviews) {
      request();
    }
  }, [movieId, reviews]);

  return (
    <ul className={s.reviewsList} ref={reviewsListRef}>
      {reviews.length > 0 ? (
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
