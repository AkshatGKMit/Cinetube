type ResponseFailure = {
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
