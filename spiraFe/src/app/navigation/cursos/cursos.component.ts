import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/Models/Cursos';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso: Cursos = new Cursos();
  listaCursos: Cursos[];
  message;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.getCursos();
  }


  guardarFormulario() {
    if (this.curso.id) {
      this.update();
    }else{
      this.save();
    }
  }

  save() {
    this.cursosService.guardarCursos(this.curso).subscribe(resp => {
      this.curso = new Cursos();
      this.message="Curso registrado exitosamente";
      this.getCursos();
    }, error => {
      alert("Error inesperado")
    })
  }

  update() {
    this.cursosService.editarCursos(this.curso).subscribe(resp => {
      this.curso = new Cursos();
      this.message="Curso actualizado exitosamente";
      this.getCursos();
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

  editar(c: Cursos) {
    this.curso = c;
  }

  cancelEdit(){
    this.curso = new Cursos();
  }

}
