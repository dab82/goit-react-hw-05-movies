import PropTypes from 'prop-types';
import noPhoto from '../../images/noPhoto.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/movieApi';
import { MovieText, Title, SecondaryMovieTitle } from '../../common/Style';
import { ImageCast, CastItem } from './CastStyled';
import { setSliderSettings } from '../slider/slider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      await fetchCast(moviesId).then(data => setActors(data.cast));
    };
    fetch();
  }, [moviesId]);

  if (actors.length === 0) {
    return <Title>No actors for this movie</Title>;
  }

  return (
    <>
      <Slider {...setSliderSettings(actors.length)} width="100%">
        {actors &&
          actors.map(({ id, character, name, profile_path }) => (
            <CastItem key={id}>
              {profile_path ? (
                <ImageCast
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt=""
                />
              ) : (
                <ImageCast src={noPhoto} alt="" />
              )}
              {name ? (
                <SecondaryMovieTitle>{name}</SecondaryMovieTitle>
              ) : (
                <SecondaryMovieTitle>No actor`s name</SecondaryMovieTitle>
              )}
              {character ? (
                <MovieText>{character}</MovieText>
              ) : (
                <MovieText>No actor`s character</MovieText>
              )}
            </CastItem>
          ))}
      </Slider>
    </>
  );
}

Cast.propTypes = {
  searchFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
    })
  ),
};
