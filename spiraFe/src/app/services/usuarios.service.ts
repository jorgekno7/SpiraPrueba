import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../Models/Usuarios';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {
  }
  
  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(Constants.local + 'usuarios');
  }
 
  getAlumnos(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(Constants.local + 'alumnos');
  }
  
  getUsuarioById(id): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(Constants.local + 'usuarios/' + id);
  }
  
  guardarUsuarios(usuario): Observable<Usuarios> {
    return this.http.post<Usuarios>(Constants.local + 'usuarios', usuario);
  }
  
  editarUsuarios(usuarios: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(Constants.local + 'usuarios/' + usuarios.id, usuarios);
  }

}
