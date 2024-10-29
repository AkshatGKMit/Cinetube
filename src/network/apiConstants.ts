const ApiConstants = {
  BEARER: process.env.API_BEARER_TOKEN,
  BASE_URL: process.env.API_BASE_URL,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: process.env.API_BEARER_TOKEN,
  },
};

export default ApiConstants;
