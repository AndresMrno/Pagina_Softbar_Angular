import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/models/usuario';
import { Rol } from 'src/app/models/rol';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';







@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})


export class SingupComponent implements OnInit {

  usuario: Usuario = new Usuario();
  rol: Rol = new Rol();
  roles: Rol[] = [];




  constructor(private userService:UserService, private snack: MatSnackBar) { }



  ngOnInit(): void {

    

  }

  

  formSubmit(){
    console.log(this.usuario);
    if(this.usuario.identificacion == 0 || this.usuario.identificacion == null){
      this.snack.open('La identificación es requerido','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }


    console.log(this.usuario);
    if(this.usuario.nombre == "" || this.usuario.nombre == null){
      this.snack.open('El nombre es requerido','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    console.log(this.usuario);
    if(this.usuario.apellido == "" || this.usuario.apellido == null){
      this.snack.open('El apellido es requerido','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    console.log(this.usuario);
    if(this.usuario.edad < 18 || this.usuario.edad == null){
      this.snack.open('El usuario debe ser mayor de edad','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    console.log(this.usuario);
    if(this.usuario.correo == "" || this.usuario.correo == null){
      this.snack.open('El correo es requerido','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    console.log(this.usuario);
    if(this.usuario.contrasena == "" || this.usuario.contrasena == null){
      this.snack.open('La contraseña es requerida','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    console.log(this.usuario);
    if(this.usuario.telefono == 0 || this.usuario.telefono == null){
      this.snack.open('El telefono es requerido','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    console.log(this.usuario);
    if(this.usuario.direccion == "" || this.usuario.direccion == null){
      this.snack.open('La direccion es requerida','Aceptar',{
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.registrarUsuario(this.usuario).subscribe(
      (data) =>{
        console.log(this.usuario)
        console.log(data);
        Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');
      },(error)=>{
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema','Aceptar',{
          duration : 5000,
          verticalPosition : 'top',
          horizontalPosition: 'right'
        });
      }
    )
}

}
