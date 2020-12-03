import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../util/constants';
import { Asignacion } from '../Models/Asignacion';
import { AsignacionQuery } from '../Models/AsignacionQuery';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  constructor(private http: HttpClient) {
  }

  getAsignacion(): Observable<AsignacionQuery[]> {
    return this.http.get<AsignacionQuery[]>(Constants.local + 'asignaciondecursosporusuario');
  }
  
  getAsignacionById(id): Observable<AsignacionQuery[]> {
    return this.http.get<AsignacionQuery[]>(Constants.local + 'asignaciondecursosporusuario/' + id);
  }
  
  guardarAsignacion(asignacion): Observable<Asignacion> {
    return this.http.post<Asignacion>(Constants.local + 'asignaciondecursosporusuario', asignacion);
  }
  
  editarAsignacion(asignacion: Asignacion): Observable<Asignacion> {
    return this.http.put<Asignacion>(Constants.local + 'asignaciondecursosporusuario/' + asignacion.id, asignacion);
  }
  
  eliminarAsignacion(asignacion: Asignacion): Observable<any> {
    return this.http.delete<any>(Constants.local + 'asignaciondecursosporusuario/' + asignacion.id);
  }
}
