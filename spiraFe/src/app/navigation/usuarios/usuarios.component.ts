import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Models/Usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuario: Usuarios = new Usuarios();
  listaUsuarios: Usuarios[];
  message;
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  guardarFormulario() {
    if (this.usuario.id) {
      this.update();
    }else{
      this.save();
    }
  }

  save() {
    this.usuariosService.guardarUsuarios(this.usuario).subscribe(resp => {
      this.usuario = new Usuarios();
      this.message="Usuario registrado exitosamente";
      this.getUsuarios();
    }, error => {
      alert("Error inesperado")
    })
  }

  update() {
    this.usuariosService.editarUsuarios(this.usuario).subscribe(resp => {
      this.usuario = new Usuarios();
      this.message="Usuario actualizado exitosamente";
      this.getUsuarios();
    }, error => {
      alert("Error inesperado")
    })
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(resp => {
      this.listaUsuarios = resp;
    }, error => {
      alert("Error inesperado")
    })
  }

  editar(u: Usuarios) {
    this.usuario = u;
  }

  cancelEdit(){
    this.usuario = new Usuarios();
  }

}
