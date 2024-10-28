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

type CreateGuestResponseType = CreateSessionSuccessResponseType | CreateSessionFailureResponseType;

type CreateSessionViaLoginFailureResponseType = ResponseFailure;

type CreateSessionViaLoginSuccessResponseType = RequestTokenResponseType;

type CreateSessionViaLoginResponseType = CreateSessionViaLoginFailureResponseType | CreateSessionViaLoginSuccessResponseType;

type DeleteSessionFailureResponseType = ResponseFailure;

type DeleteSessionSuccessResponseType = { success: true };

type DeleteSessionResponseType = DeleteSessionSuccessResponseType | DeleteSessionFailureResponseType;

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

type ImageResponseType = {
  aspect_ratio: number;
  height: number;
  file_path: string;
  width: number;
};

type ImageResponseTypes = ImageResponseType[];

type VideoResponseType = {
  name: string;
  key: string;
  site: 'YouTube' | 'Vimeo' | string;
  size: number;
  type: 'Teaser' | 'Trailer' | 'Featurette';
  official: boolean;
  published_at: string;
  id: string;
};

type VideoResponseTypes = VideoResponseType[];

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
  genres?: { id: number; name: string }[];
  homepage?: string;
  imdb_id?: string;
  revenue?: number;
  runtime?: number;
  tagline?: string;
};

type MovieDetailsResponseTypes = MovieDetailsResponseType[];

type MovieResponseListType = {
  page: number;
  results: MovieDetailsResponseTypes;
  total_pages?: number;
  total_results?: number;
};

type PopularMoviesResponseType = MovieResponseListType;

type TopRatedMoviesResponseType = MovieResponseListType;

type SearchMovieResponseType = MovieResponseListType;

type FavoriteMoviesResponseType = MovieResponseListType;
