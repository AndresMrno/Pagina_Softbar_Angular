import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "correo" : '',
    "contrasena" : ''

  }

  constructor(private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.correo == '' || this.loginData.correo == null){
      this.snack.open('La identificación es requerido','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
      if(this.loginData.contrasena == '' || this.loginData.contrasena == null){
        this.snack.open('La contraseña es requerida','Aceptar',{
          duration : 5000,
          verticalPosition : 'top',
          horizontalPosition: 'right'
        });
        return;
      }
    }
  }


