import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/Models/Asignacion';
import { AsignacionQuery } from 'src/app/Models/AsignacionQuery';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { CursosService } from 'src/app/services/cursos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {
  asignacion: Asignacion = new Asignacion();
  listaAsignacion: AsignacionQuery[];
  message;
  listaCursos;
  listaUsuarios;
  constructor(private asignacionService: AsignacionService, private cursosService: CursosService,
    private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getAsignacion();
    this.getCursos();
    this.getUsuarios();
  }

  guardarFormulario() {
    if (this.asignacion.id) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    this.asignacionService.guardarAsignacion(this.asignacion).subscribe(resp => {
      this.asignacion = new Asignacion();
      this.message = "proceso registrado exitosamente";
      this.getAsignacion();
    }, error => {
      alert("Error inesperado")
    })
  }

  update() {
    this.asignacionService.editarAsignacion(this.asignacion).subscribe(resp => {
      this.asignacion = new Asignacion();
      this.message = "Proceso actualizado exitosamente";
      this.getAsignacion();
    }, error => {
      alert("Error inesperado")
    })
  }

  getAsignacion() {
    this.asignacionService.getAsignacion().subscribe(resp => {
      this.listaAsignacion = resp;
    }, error => {
      alert("Error inesperado")
    })
  }

  editar(a: AsignacionQuery) {
    this.asignacion.fk_u_id = a.fk_u_id;
    this.asignacion.id = a.id;
    this.asignacion.fk_c_id = a.fk_c_id;
  }

  cancelEdit() {
    this.asignacion = new Asignacion();
  }

  eliminar(a: Asignacion) {
    this.asignacionService.eliminarAsignacion(a).subscribe(resp => {
      this.getAsignacion();
    }, error => {
      alert("Error inesperado")
    })
  }

  getCursos() {
    this.cursosService.getCursos().subscribe(resp => {
      this.listaCursos = resp;
    }, error => {
      alert("Error inesperado")
    })
  }
  
  getUsuarios() {
    this.usuariosService.getAlumnos().subscribe(resp => {
      this.listaUsuarios = resp;
    }, error => {
      alert("Error inesperado")
    })
  }

}
