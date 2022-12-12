import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { CrudReservaComponent } from './components/crud-reserva/crud-reserva.component';
import { CrudInventarioComponent } from './components/crud-inventario/crud-inventario.component';
import { InventarioFormComponent } from './components/inventario-form/inventario-form.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { CrudPedidoComponent } from './components/crud-pedido/crud-pedido.component';

 








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingupComponent,
    LoginComponent,
    HomeComponent,
    CrudUsuarioComponent,
    UsuarioFormComponent,
    ReservaFormComponent,
    CrudReservaComponent,
    CrudInventarioComponent,
    InventarioFormComponent,
    PedidoFormComponent,
    CrudPedidoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
