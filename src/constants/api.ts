import EnvVars from './env';

const ApiConstants = {
  BEARER: `Bearer ${EnvVars.API_BEARER_TOKEN}`!,
  BASE_URL: EnvVars.API_BASE_URL!,
  headers: {
    accept: 'application/json',
    Authorization: EnvVars.API_BEARER_TOKEN!,
  },
};

export default ApiConstants;
