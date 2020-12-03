import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../Models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor(public router: Router) { }

  getIsLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  SignOut() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);

  }

  isAdmin() {
    const user: Usuarios = JSON.parse(localStorage.getItem('user'));
    return user.u_perfil === "administrador"
  }
  getActiveUser():Usuarios{
    const user:Usuarios = JSON.parse(localStorage.getItem('user'));
    return user;
  }


}