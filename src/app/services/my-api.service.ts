import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyAPIService {

  constructor(
    private http: HttpClient
  ) { }

  fetchData(bread: string = 'african'): Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/${bread}/images/random`);
  }
}
