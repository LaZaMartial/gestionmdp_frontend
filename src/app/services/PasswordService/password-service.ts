import { inject, Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request-service';
import { IPassword } from '../../types/type';
import { PASSWORD_ENDPOINT_URL } from '../../constants/url';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private readonly http = inject(HttpRequestService)

  getPassword() {
    return this.http.get<Array<IPassword>>(PASSWORD_ENDPOINT_URL).pipe(catchError((err) => { console.log(err); throw err; }))
  }
}
