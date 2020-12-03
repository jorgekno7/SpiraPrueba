import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './navigation/main/main.component';
import { UsuariosComponent } from './navigation/usuarios/usuarios.component';
import{CursosComponent}from'./navigation/cursos/cursos.component';
import { AsignacionComponent } from './navigation/asignacion/asignacion.component';
import { LoginComponent } from './navigation/login/login.component';
import { RegistroComponent } from './navigation/registro/registro.component';
import { AuthGuard } from './core/Guard';


const routes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      {path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
      {path: 'cursos', component: CursosComponent, canActivate: [AuthGuard]},
      {path: 'asignacion', component: AsignacionComponent, canActivate: [AuthGuard]},
      {path: 'registro', component: RegistroComponent ,canActivate: [AuthGuard]},
      
    ]
  },
  {path:'login',component:LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
