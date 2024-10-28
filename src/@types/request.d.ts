type SessionRequestType = { session_id: string };

type PageRequestType = { page: number };

type CreateSessionRequestBodyType = SessionRequestType;

type CreateSessionViaLoginRequestBodyType = {
  request_token: string;
  username: string;
  password: string;
};

type DeleteSessionRequestBodyType = SessionRequestType;

type UserDetailsRequestParamsType = SessionRequestType;

type AddFavoriteRequestParamsType = SessionRequestType;

type AddFavoriteRequestBodyType = {
  media_id: number;
  media_type: 'movie';
  favorite: boolean;
};

type FavoriteMoviesRequestParamsType = SessionRequestType & PageRequestType;

type PopularRequestParamsType = PageRequestType;

type TopRatedRequestParamsType = PageRequestType;

type SearchRequestParamsType = PageRequestType & { query: string };
