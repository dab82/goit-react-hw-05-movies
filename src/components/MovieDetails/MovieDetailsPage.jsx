import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/movieApi';
import noPhoto from '../../images/noPhoto.png';
import {
  LinkReturn,
  Paragraph,
  LinkCast,
  LinkRewiews,
  FilmInfoContainer,
  Section,
  GenresItem,
  GenresList,
  FilmMore,
} from './MovieDetailsStyled';

import { MainMovieTitle, Img, SecondaryMovieTitle } from '../../common/Style';

export default function MovieDetailsPage() {
  const [movieObj, setMovieObj] = useState({});

  let { moviesId } = useParams();

  const location = useLocation();
  const locationFrom = location?.state?.from ?? '/';

  useEffect(() => {
    const oneMovie = () => {
      fetchMovieDetails(moviesId).then(data => {
        setMovieObj(data);
      });
    };
    oneMovie();
  }, [moviesId]);

  const releaseData = new Date(movieObj.release_date);

  const { release_date, title, vote_average, overview, genres, poster_path } =
    movieObj;
  return (
    <>
      <LinkReturn to={locationFrom}> ◀ BACK </LinkReturn>
      <Section>
        {poster_path ? (
          <Img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt=""
            min-width={'100px'}
          />
        ) : (
          <Img src={noPhoto} alt="" />
        )}

        <FilmInfoContainer>
          <MainMovieTitle>
            {title} ({releaseData.getFullYear(release_date)})
          </MainMovieTitle>
          <SecondaryMovieTitle>
            User score: {vote_average * 10}%
          </SecondaryMovieTitle>
          <SecondaryMovieTitle>Genres:</SecondaryMovieTitle>
          <GenresList>
            {genres &&
              genres.map(({ name }) => (
                <GenresItem key={name}>{name}</GenresItem>
              ))}
          </GenresList>
          <SecondaryMovieTitle>Overview </SecondaryMovieTitle>
          {overview ? (
            <Paragraph>{overview}</Paragraph>
          ) : (
            <Paragraph>No overview</Paragraph>
          )}
        </FilmInfoContainer>
      </Section>
      <Section>
        <LinkCast
          to={`/movies/${moviesId}/cast`}
          state={{ from: locationFrom }}
        >
          Cast
        </LinkCast>
        <LinkRewiews
          to={`/movies/${moviesId}/reviews`}
          state={{ from: locationFrom }}
        >
          Reviews
        </LinkRewiews>
      </Section>
      <FilmMore>
        <Outlet />
      </FilmMore>
    </>
  );
}
