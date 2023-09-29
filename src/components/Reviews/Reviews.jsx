import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getApiReviews } from 'api-tmdb';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import {Descr} from './Reviews.styled'



export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [visibleText, setVisibleText] = useState(false);
  
    useEffect(() => {
      getApiReviews(movieId)
        .then(r => {
          if (r.data.total_pages === 0) {
            setVisibleText(true);
            return;
          }
          setReviews(r.data);
          setVisibleText(false);
        })
        .catch(r => {
          setVisibleText(true);
          console.error(r.response.data.status_message);
        });
    }, [movieId]);

  return (
    <>
      {visibleText && <Descr>We don`t have any reviews for this movie.</Descr>}
      {reviews && <ReviewsList reviews={reviews} />}
    </>
  )
}
