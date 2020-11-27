import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { primariaComponent } from './primaria/primaria.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'Inicio', component: InicioComponent},
  {path:'', redirectTo:'Inicio', pathMatch:'full'},
  {path:'Primaria', component: primariaComponent},
  {path:'', redirectTo:'Primaria', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'', redirectTo:'Login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
