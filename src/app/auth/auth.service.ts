import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private http: HttpClient) { }
  getToken(): string {
    return this.token;
  }
  // fetchToken(): Observable<string> {
  //   return this.http.post
  // }
}
