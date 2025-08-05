import { inject, Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request-service';
import { IPassword, IPasswordBody, IPasswordListResponse, IPasswordResponse } from '../../types/type';
import { PASSWORD_ENDPOINT_URL, PASSWORD_ENDPOINT_WITH_PARAMS_URL } from '../../constants/url';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private readonly http = inject(HttpRequestService)

  // Get all password
  getPassword() {
    return this.http.get<IPasswordListResponse>(PASSWORD_ENDPOINT_URL).pipe(catchError((err) => { console.log(err); throw err; }))
  }

  // Post password
  postPassword(item: IPasswordBody) {
    return this.http.post<IPasswordResponse>(PASSWORD_ENDPOINT_URL, item).pipe(catchError((err) => { console.log(err); throw err; }));
  }

  // Delete password
  deletePassword(item: IPassword) {
    return this.http.delete(PASSWORD_ENDPOINT_WITH_PARAMS_URL(item.id)).pipe(catchError((err) => { console.log(err); throw err; }))
  }

  updatePassword(id: number, item: Partial<IPasswordBody>) {
    return this.http.patch(PASSWORD_ENDPOINT_WITH_PARAMS_URL(id), item).pipe(catchError((err) => { console.log(err); throw err; }));
  }

  getOnePassword(id: number) {
    return this.http.get<IPasswordResponse>(PASSWORD_ENDPOINT_WITH_PARAMS_URL(id)).pipe(catchError((err) => { console.log(err); throw err; }));
  }
}
