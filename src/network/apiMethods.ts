import ApiConstants from './apiConstants';
import { _get, _post } from './instanceMethods';

const {
  authentication: authenticationRoute,
  account: accountRoute,
  movies: moviesRoute,
  movieLists: movieListRoute,
  search: searchRoute,
} = ApiConstants.endpoints;

// * Authentication Methods
const {
  createGuestSession: createGuestSessionRoute,
  createRequestToken: createRequestTokenRoute,
  createSession: createSessionRoute,
  createSessionViaLogin: createSessionViaLoginRoute,
  deleteSession: deleteSessionRoute,
} = authenticationRoute;

async function apiGuestLogin() {
  const response = await _get<CreateGuestSessionResponseType>(createGuestSessionRoute);
  return response;
}

async function apiGenerateRequestToken() {
  const response = await _get<CreateRequestTokenResponseType>(createRequestTokenRoute);

  return response;
}

async function apiCreateSessionId(request_token: string) {
  const body: CreateSessionRequestBodyType = { request_token };

  const response = await _post<CreateSessionResponseType, CreateSessionRequestBodyType>(createSessionRoute, body);

  return response;
}

async function apiCreateSessionIdViaLogin(request_token: string, username: string, password: string) {
  const body: CreateSessionViaLoginRequestBodyType = { request_token, username, password };

  const response = await _post<CreateSessionViaLoginResponseType, CreateSessionViaLoginRequestBodyType>(
    createSessionViaLoginRoute,
    body,
  );

  return response;
}

async function apiDeleteSessionId(session_id: string) {
  const body: DeleteSessionRequestBodyType = { session_id };

  const response = await _post<DeleteSessionResponseType, DeleteSessionRequestBodyType>(deleteSessionRoute, body);

  return response;
}

//* Account
const { details: accountDetailsRoute, addFavorites: addFavoritesRoute, favoriteMovies: favoriteMoviesRoute } = accountRoute;

async function apiGetUserDetails(accountId: number, session_id: string) {
  const params: UserDetailsRequestParamsType = { session_id };

  const response = await _get<UserDetailsResponseType, UserDetailsRequestParamsType>(accountDetailsRoute(accountId), {
    params,
  });

  return response;
}

async function apiGetFavorites(accountId: number, page: number, session_id: string) {
  const params: FavoriteMoviesRequestParamsType = { page, session_id };

  const response = await _get<FavoriteMoviesResponseType, FavoriteMoviesRequestParamsType>(favoriteMoviesRoute(accountId), {
    params,
  });

  return response;
}

async function apiAddFavorites(accountId: number, media_id: number, favorite: boolean, session_id: string) {
  const params: AddFavoriteRequestParamsType = { session_id };
  const body: AddFavoriteRequestBodyType = { media_id, favorite, media_type: 'movie' };

  const response = await _post<AddFavoriteResponseType, AddFavoriteRequestBodyType, AddFavoriteRequestParamsType>(
    addFavoritesRoute(accountId),
    body,
    { params },
  );

  return response;
}

//* Movie Lists
const { popular: popularRoute, topRated: topRatedRoute } = movieListRoute;

async function apiGetPopularOrTopRated(page: number, isPopular: boolean) {
  const params: PopularOrTopRatedRequestParamsType = { page };

  const url = isPopular ? popularRoute : topRatedRoute;

  const response = await _get<PopularOrTopRatedMoviesResponseType, PopularOrTopRatedRequestParamsType>(url, {
    params,
  });

  return response;
}

//* Movie Details
const { details: movieDetailsRoute, images: imagesRoute, similar: similarRoute, videos: videosRoute } = moviesRoute;

async function apiGetMovieDetails(id: number) {
  const response = await _get<MovieDetailsResponseType>(movieDetailsRoute(id));

  return response;
}

async function apiGetMovieImages(id: number) {
  const response = await _get<MovieImagesResponseType>(imagesRoute(id));

  return response;
}

async function apiGetSimilarMovies(id: number) {
  const response = await _get<MovieSimilarResponseType>(similarRoute(id));

  return response;
}

async function apiGetMovieVideos(id: number) {
  const response = await _get<MovieVideosResponseTypes>(videosRoute(id));

  return response;
}

//* Search Methods
const { movie: movieSearchRoute } = searchRoute;

async function apiGetMovieSearch(query: string, page: number) {
  const params: SearchRequestParamsType = { page, query };

  const response = await _get<SearchMovieResponseType, SearchRequestParamsType>(movieSearchRoute, { params });

  return response;
}

//* Methods Constants
const ApiMethods = {
  authentication: {
    apiGuestLogin,
    apiGenerateRequestToken,
    apiCreateSessionId,
    apiCreateSessionIdViaLogin,
    apiDeleteSessionId,
  },

  account: {
    apiGetUserDetails,
    apiGetFavorites,
    apiAddFavorites,
  },

  movieLists: {
    apiGetPopularOrTopRated,
  },

  movieDetails: {
    apiGetMovieDetails,
    apiGetMovieImages,
    apiGetSimilarMovies,
    apiGetMovieVideos,
  },

  search: {
    apiGetMovieSearch,
  },
};

export default ApiMethods;
