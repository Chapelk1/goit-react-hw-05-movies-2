import { getApi } from "api-tmdb";
import { useState, useEffect } from "react";
import MoviesList from "components/MoviesList/MoviesList";

export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getApi()
          .then(r => {
            setMovies(r.data.results);
          })
          .catch(r => {
            console.error(r.response.data.status_message);
          });
    },[])
    



    return <MoviesList movies={movies} />;
}