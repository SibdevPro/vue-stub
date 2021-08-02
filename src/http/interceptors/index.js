import { addRequestInterceptor, addResponseInterceptor } from '../client';
import { requestWithAuth, handleAuthError } from './auth';

export default function initializeHttpInterceptors() {
  addRequestInterceptor({ request: requestWithAuth });
  addResponseInterceptor({ error: handleAuthError });
}
