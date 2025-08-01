import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// This service provides methods for making HTTP requests to the backend API
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private readonly http = inject(HttpClient)

  get<T>(url: string) {
    return this.http.get<T>(`${url}`);
  }

  post<T>(url: string, body: unknown) {
    return this.http.post<T>(`${url}`, body);
  }

  put<T>(url: string, body: unknown) {
    return this.http.put<T>(`${url}`, body);
  }

  patch<T>(url: string, body: unknown) {
    return this.http.patch<T>(`${url}`, body);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(`${url}`);
  }
}
