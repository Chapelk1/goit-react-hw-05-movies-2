import { useSearchParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { getApiQuery } from "api-tmdb";
import {Form, Input, Btn} from 'page/Movies/Movies.styled'
import MoviesList from "components/MoviesList/MoviesList";

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (movieName !== '') {
      getApiQuery(movieName).then(r => {
        setMovies(r.data.results);
      }).catch(r => { console.error(r.response.data.status_message); })
    }
  }, [movieName]);
  
  const updateQuery = (query) => {
      setQuery(query);
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (query === '') {
      return;
    }
    setSearchParams({ query });
  }


    return (
      <>
        <Form onSubmit={submitForm}>
          <Input
            value={query}
            onChange={e => {
              updateQuery(e.target.value);
            }}
          />
          <Btn type="submit">Search</Btn>
        </Form>
        <MoviesList movies={movies} />
      </>
    );
}