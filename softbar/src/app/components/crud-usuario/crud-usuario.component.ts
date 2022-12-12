import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './crud-usuario.component.html',
  styleUrls: ['./crud-usuario.component.css']
})
export class CrudUsuarioComponent implements OnInit {

  usuarios : Usuario[] = [];

  constructor(private usuarioService : UsuariosService) { }

  ngOnInit(): void {

    this.usuarioService.getUsuario()
    .subscribe(response => this.usuarios=response);
  } 

  eliminarUsuario(id_usuario){
    this.usuarioService.eliminarUsuario(id_usuario)
    .subscribe(response =>{
      if(response===true){
        this.usuarios.pop();
      }
      Swal.fire('Usuario Eliminado','Usuario eliminado con exito','success');
    })
  }

}
