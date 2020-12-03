import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/Login';
import { Usuarios } from '../Models/Usuarios';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(login): Observable<Usuarios> {
    return this.http.post<Usuarios>(Constants.local + 'login', login);
  }
  
}
