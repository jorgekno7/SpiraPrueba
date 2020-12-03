import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../Models/Cursos';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) {
  }

  getCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(Constants.local + 'cursos');
  }
  
  getCursosById(id): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(Constants.local + 'cursos/' + id);
  }
  
  guardarCursos(cursos): Observable<Cursos> {
    return this.http.post<Cursos>(Constants.local + 'cursos', cursos);
  }
  
  editarCursos(cursos: Cursos): Observable<Cursos> {
    return this.http.put<Cursos>(Constants.local + 'cursos/' + cursos.id, cursos);
  }

}
