import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './navigation/usuarios/usuarios.component';
import { CursosComponent } from './navigation/cursos/cursos.component';
import { AsignacionComponent } from './navigation/asignacion/asignacion.component';
import { LoginComponent } from './navigation/login/login.component';
import { MainComponent } from './navigation/main/main.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegistroComponent } from './navigation/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CursosComponent,
    AsignacionComponent,
    LoginComponent,
    MainComponent,
    NavBarComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
