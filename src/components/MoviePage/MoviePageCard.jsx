import PropTypes from 'prop-types';
import { MovieItemCard } from './MovieItemCard';
import { MovieList } from '../../common/Style';

export function MoviePageCard({ searchFilms }) {
  return (
    <MovieList>
      {searchFilms.map(
        ({
          id,
          title,
          release_date,
          name,
          backdrop_path,
          vote_count,
          vote_average,
        }) => (
          <MovieItemCard
            key={id}
            id={id}
            release_date={release_date}
            title={title}
            name={name}
            backdrop_path={backdrop_path}
            vote_count={vote_count}
            vote_average={vote_average}
          />
        )
      )}
    </MovieList>
  );
}

MoviePageCard.propTypes = {
  searchFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      backdrop_path: PropTypes.string,
      vote_count: PropTypes.number,
      vote_average: PropTypes.number,
    })
  ),
};
