import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getApiCasts } from 'api-tmdb';
import CastsList from 'components/CastsList/CastsList';




export default function Cast() {
    const { movieId } = useParams();
    const [casts, setCasts] = useState(null);
  
    useEffect(() => {
      getApiCasts(movieId)
        .then(r => {setCasts(r.data) })
        .catch(r => {
          console.error(r.response.data.status_message);
        });
    }, [movieId]);

  return <CastsList cast={casts} /> 
}
