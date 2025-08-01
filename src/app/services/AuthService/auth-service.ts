import { IAuthResponse } from '../../types/type';
import { inject, Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request-service';
import { IUserLogin } from '../../types/type';
import { AUTH_ENDPOINT_URL } from '../../constants/url';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Inject the http service
  private readonly http = inject(HttpRequestService)

  // states
  private readonly _token = new BehaviorSubject<string | null>(this.loadToken());
  private readonly _user = new BehaviorSubject<IAuthResponse['user'] | null>(this.loadUser());
  readonly currentUser$ = this._user.asObservable();

  //Public methods
  login(payload: IUserLogin) {
    return this.http.post<IAuthResponse>(AUTH_ENDPOINT_URL, payload).pipe(tap(({ accessToken, user }) => {
      this.setSession(accessToken, user)
    }))
  }

  logout() {
    this.clearSession();
  }

  // set the token and the user to the local storage
  private setSession(token: string, user: IAuthResponse['user']) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this._token.next(token);
    this._user.next(user);
  }

  // remove the token and the user from the local storage
  private clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._token.next(null);
    this._user.next(null);
  }

  // get the token
  private loadToken(): string | null {
    return localStorage.getItem('token');
  }

  // get the user
  private loadUser(): IAuthResponse['user'] | null {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  }
}
