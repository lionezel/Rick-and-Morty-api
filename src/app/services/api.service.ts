import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL: string = 'https://rickandmortyapi.com/api';

  constructor(private _http: HttpClient) {}

  getAllPeople(): Observable<any> {
    return this._http.get(`${this.baseURL}/character`);
  }
}
