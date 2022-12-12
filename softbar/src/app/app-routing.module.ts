import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudInventarioComponent } from './components/crud-inventario/crud-inventario.component';
import { CrudReservaComponent } from './components/crud-reserva/crud-reserva.component';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { InventarioFormComponent } from './components/inventario-form/inventario-form.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
  {
    path : '',
    component:HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'singup',
    component:SingupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component:LoginComponent,
    pathMatch : 'full'
  },

  {
    path : 'crud',
    component: CrudUsuarioComponent,
    pathMatch : 'full' 
  },

  {
    path : 'formulario',
    component: UsuarioFormComponent,
  },

  {
    path : 'formulario/:id_usuario',
    component: UsuarioFormComponent, 
  },


  {
    path : 'formularioR',
    component: ReservaFormComponent,
  },

  {
    path : 'formularioR/:id_reserva',
    component: ReservaFormComponent,
  },

  {
    path : 'crudReserva',
    component: CrudReservaComponent,
  },

  {
    path : 'formularioI',
    component: InventarioFormComponent,
  },

  {
    path : 'formularioI/:id_inventario',
    component: InventarioFormComponent,
  },

  {
    path : 'crudInventario',
    component: CrudInventarioComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
