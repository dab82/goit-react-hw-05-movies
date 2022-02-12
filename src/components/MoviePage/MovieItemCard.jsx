import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import noFilm from '../../images/noFilm.jpg';
import {
  CardInfoContainer,
  SecondaryMovieTitle,
  MovieItem,
  MovieText,
  ImageFilm,
  LinkStyled,
} from '../../common/Style';

export function MovieItemCard({
  id,
  title,
  name,
  backdrop_path,
  vote_average,
}) {
  const location = useLocation();

  return (
    <MovieItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        {backdrop_path ? (
          <ImageFilm
            src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
            alt=""
          />
        ) : (
          <ImageFilm src={noFilm} alt="" />
        )}

        <CardInfoContainer>
          <SecondaryMovieTitle>{title ? title : name}</SecondaryMovieTitle>
          <MovieText>Average rating: {vote_average}</MovieText>
        </CardInfoContainer>
      </LinkStyled>
    </MovieItem>
  );
}

MovieItemCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  backdrop_path: PropTypes.string,
  vote_count: PropTypes.number,
  vote_average: PropTypes.number,
};
