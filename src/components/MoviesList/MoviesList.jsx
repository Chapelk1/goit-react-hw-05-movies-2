import { MovieItem, MovieList, LinkItm } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export default function MoviesList({movies}){
    const location = useLocation()
    return (
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <LinkItm to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </LinkItm>
          </MovieItem>
        ))}
      </MovieList>
    );
}