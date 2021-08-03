import { AUTH_HEADER, ERROR_STATUSES } from '@/constants/http';
import client from '../client';
import authService from '../../services/auth';

export function requestWithAuth({ _withoutAuthHeader = false, ...config }) {
  if (_withoutAuthHeader) {
    return config;
  }

  const additionalHeaders = {
    [AUTH_HEADER]: authService.getAuthHeader(),
  };

  return {
    ...config,
    headers: {
      ...config.headers,
      ...additionalHeaders,
    },
  };
}

export function handleAuthError(error) {
  const errorStatus = error.response.status;

  if (errorStatus === ERROR_STATUSES.UNAUTHORIZED) {
    const { _retry } = error.config;
    if (!_retry) {
      return authService.refreshAuthTokens().then(() =>
        client.request({
          ...error.config,
          headers: {
            ...error.config.headers,
          },
          _retry: true,
        })
      );
    }
  }

  return Promise.reject(error);
}
