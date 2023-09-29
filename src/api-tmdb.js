import axios from 'axios'


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI3MGE5MDQxOWZmZGU3NTdhNTMwZjc5ZGEwZjk5MyIsInN1YiI6IjY1MTRhOTZlYzUwYWQyMDE0ZGNiZDRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cnUSQym0igy96KjBCSKsZxHrfcfXCa_zP5yeOXpcdA',
  },
};
export function getApi() {
  return axios
    .get(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
}

export function getApiMovie(movieId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}`, options)
}

export function getApiCasts(movieId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options)
}

export function getApiReviews(movieId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
}

export function getApiQuery( query) {
  const params = {
    params: {
      query: `${query}`,
    },
  };
  return axios
    .get(`https://api.themoviedb.org/3/search/movie`, {...options, ...params})
    
}