import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/movieApi';
import { Title, SecondaryMovieTitle } from '../../common/Style';
import { ReviewsItem, ReviewsList, ReviewText } from './ReviewsStyled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      await fetchReviews(moviesId).then(data => setReviews(data.results));
    };
    fetch();
  }, [moviesId]);

  if (reviews.length === 0) {
    return <Title>No reviews for this movie</Title>;
  }
  return (
    <>
      <ReviewsList>
        {reviews.map(review => (
          <ReviewsItem key={review.id}>
            <SecondaryMovieTitle>{review.author} :</SecondaryMovieTitle>
            <ReviewText>{review.content}</ReviewText>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
