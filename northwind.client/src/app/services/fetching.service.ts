import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { apiUrl } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchingService {
  constructor(private http: HttpClient) {}

  getAllItems<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${apiUrl}/${endpoint}`);
  }
}
