import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getApiMovie } from "api-tmdb";
import { Suspense } from 'react';
import {
  LinkItm,
  Wraper,
  WraperImg,
  WraperDesc,
  Paragraf,
  Title,
  SecondTitle,
  Thumb,
  WraperBtn,
} from './MovieDetails.styled';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)
    const location = useLocation()
    const backLinkHref = location.state?.from ?? '/movies';
    
  useEffect(() => {
    getApiMovie(movieId)
      .then(r => {
        setMovie(r.data);
      })
      .catch(r => {
        console.error(r.response.data.status_message);
      });
    }, [movieId]);

  
    const img = 'https://fakeimg.pl/400x600'
  

    return (
      <>
        <LinkItm to={backLinkHref}>{`< Back`}</LinkItm>
        {movie && (
          <>
            <Wraper>
              <Thumb>
                <WraperImg>
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : img}
                    alt={movie.title}
                  />
                </WraperImg>
                <WraperBtn>
                  <LinkItm to="cast" state={{ from: backLinkHref }}>
                    Cast
                  </LinkItm>
                  <LinkItm to="reviews" state={{ from: backLinkHref }}>
                    Reviews
                  </LinkItm>
                </WraperBtn>
              </Thumb>

              <WraperDesc>
                <Title>{movie.title}</Title>
                <Paragraf>
                  Vote averages: {movie.vote_average.toFixed(1)}
                </Paragraf>
                <SecondTitle>Overview</SecondTitle>
                <Paragraf>{movie.overview}</Paragraf>
                <SecondTitle>Genres</SecondTitle>
                {movie.genres.map(genre => (
                  <Paragraf key={genre.name}>{genre.name}</Paragraf>
                ))}
              </WraperDesc>
            </Wraper>

            <Suspense fallback={<Paragraf>Loading subpage...</Paragraf>}>
              <Outlet />
            </Suspense>
          </>
        )}
      </>
    );
}
