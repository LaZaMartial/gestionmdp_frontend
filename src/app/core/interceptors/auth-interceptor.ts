import { HttpInterceptorFn } from '@angular/common/http';
import { AUTH_ENDPOINT_URL } from '../../constants/url';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // get the token
  const token = localStorage.getItem('token');
  // verify if it is the authentication url
  const isAuthEndpoint = req.url.includes(AUTH_ENDPOINT_URL);

  // skip if the condition is met
  if (isAuthEndpoint || !token) {
    return next(req);
  }

  // Add the bearer
  const cloned = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  })
  return next(cloned);
};
