import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ingreso : Login=new Login
message ;
  constructor(private loginServices:LoginService, public router: Router) { }

  ngOnInit(): void {
    
  }
  login() {
    this.loginServices.login(this.ingreso).subscribe(resp => {
      this.ingreso = new Login();
      localStorage.setItem('user', JSON.stringify(resp));
      this.router.navigate(['main']);
    }, error => {
      this.message="Error de usuario o contraseña";
    })
  }
}
