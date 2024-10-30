//* Global Response Type

type ResponseFailure = {
  success: false;
  status_code: number;
  status_message: string;
};

type ResponseSuccess = {
  success: false;
  status_code: number;
  status_message: string;
};

type RequestTokenResponseType = {
  success: boolean;
  expires_at: string;
  request_token: string;
};

//* Authentication Url Route Response Type

type CreateGuestSessionResponseType = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

type CreateRequestTokenResponseType = RequestTokenResponseType;

type CreateSessionFailureResponseType = ResponseFailure & {
  failure?: boolean;
};

type CreateSessionSuccessResponseType = {
  success: true;
  session_id: string;
};

type CreateSessionResponseType = CreateSessionSuccessResponseType | CreateSessionFailureResponseType;

type CreateSessionViaLoginFailureResponseType = ResponseFailure;

type CreateSessionViaLoginSuccessResponseType = RequestTokenResponseType;

type CreateSessionViaLoginResponseType = CreateSessionViaLoginFailureResponseType | CreateSessionViaLoginSuccessResponseType;

type DeleteSessionFailureResponseType = ResponseFailure;

type DeleteSessionSuccessResponseType = { success: true };

type DeleteSessionResponseType = DeleteSessionSuccessResponseType | DeleteSessionFailureResponseType;

//* Account Url Route Response Type

type UserDetailsResponseType = {
  id: number;
  name: string;
  username: string;
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string | null;
    };
  };
};

type AddFavoriteResponseType = ResponseSuccess | ResponseFailure;

//* Movie Url Route Response Type

type Genre = { id: number; name: string };

type Genres = Genre[];

type ImageResponseType = {
  aspect_ratio: number;
  height: number;
  file_path: string;
  width: number;
};

type ImageResponseTypes = ImageResponseType[];

type MovieVideoResponseType = {
  name: string;
  key: string;
  site: 'YouTube' | 'Vimeo' | string;
  size: number;
  type: 'Teaser' | 'Trailer' | 'Featurette';
  official: boolean;
  published_at: string;
  id: string;
};

type MovieVideosResponseTypes = MovieVideoResponseType[];

type MovieImagesResponseType = {
  id: number;
  backdrops: ImageResponseTypes;
  logos: ImageResponseTypes;
  posters: ImageResponseTypes;
};

type MovieDetailsResponseType = {
  id: number;
  title: string;
  release_date: string;
  original_title: string;
  overview: string;
  adult: boolean;
  popularity: number;
  backdrop_path: string | null;
  poster_path: string | null;
  budget?: number;
  genres?: Genres;
  homepage?: string;
  imdb_id?: string;
  revenue?: number;
  runtime?: number;
  tagline?: string;
};

type MovieDetailsResponseTypes = MovieDetailsResponseType[];

type MovieSimilarResponseType = { id: number; results: MovieDetailsResponseTypes };

//* Movie Lists Url Route Response Type

type MovieResponseListType = {
  page: number;
  results: MovieDetailsResponseTypes;
  total_pages?: number;
  total_results?: number;
};

type PopularOrTopRatedMoviesResponseType = MovieResponseListType;

type SearchMovieResponseType = MovieResponseListType;

type FavoriteMoviesResponseType = MovieResponseListType;
