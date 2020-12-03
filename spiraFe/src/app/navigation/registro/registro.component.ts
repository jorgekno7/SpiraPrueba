import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/Models/Asignacion';
import { AsignacionQuery } from 'src/app/Models/AsignacionQuery';
import { Usuarios } from 'src/app/Models/Usuarios';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { AutenticationService } from 'src/app/services/autentication.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  asignacion: Asignacion = new Asignacion();
  listaAsignacion: AsignacionQuery[];
  message;
  constructor(private asignacionService: AsignacionService, private autenticationService: AutenticationService) { }

  ngOnInit(): void {
    this.getAsignacion();
  }

  getAsignacion() {

    
    const activo:Usuarios=this.autenticationService.getActiveUser()
    this.asignacionService.getAsignacionById(activo.id).subscribe(resp => {
      this.listaAsignacion = resp;
    }, error => {
      alert("Error inesperado")
    })
  }
}
