const ApiConstants = {
  BEARER: process.env.API_BEARER_TOKEN,
  BASE_URL: process.env.API_BASE_URL,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: process.env.API_BEARER_TOKEN,
  },
  endpoints: {
    authentication: {
      createGuestSession: 'authentication/guest_session/new',
      createRequestToken: 'authentication/token/new',
      createSession: 'authentication/session/new',
      createSessionViaLogin: 'authentication/token/validate_with_login',
      deleteSession: 'authentication/session',
    },
    account: {
      details: (id: number) => `account/${id}`,
      addFavorites: (id: number) => `account/${id}/favorite`,
      favoriteMovies: (id: number) => `account/${id}/favorite/movies`,
    },
    movies: {
      details: (id: number) => `movie/${id}`,
      images: (id: number) => `movie/${id}/images`,
      similar: (id: number) => `movie/${id}/similar`,
      videos: (id: number) => `movie/${id}/videos`,
    },
    movieLists: {
      popular: 'movie/popular',
      topRated: 'movie/top_rated',
    },
    search: {
      movie: 'search/movie',
    },
  },
};

export default ApiConstants;
