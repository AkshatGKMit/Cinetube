//* Global Request Type

type SessionRequestType = { session_id: string };

type PageRequestType = { page: number };

//* Authentication Url Route Request Type

type CreateSessionRequestBodyType = { request_token: string };

type CreateSessionViaLoginRequestBodyType = {
  request_token: string;
  username: string;
  password: string;
};

type DeleteSessionRequestBodyType = SessionRequestType;

//* Account Url Route Request Type

type UserDetailsRequestParamsType = SessionRequestType;

type AddFavoriteRequestParamsType = SessionRequestType;

type AddFavoriteRequestBodyType = {
  media_id: number;
  media_type: 'movie';
  favorite: boolean;
};

type FavoriteMoviesRequestParamsType = SessionRequestType & PageRequestType;

//* Movie Lists Url Route Request Type

type PopularOrTopRatedRequestParamsType = PageRequestType;

type SearchRequestParamsType = PageRequestType & { query: string };
