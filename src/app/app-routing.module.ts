import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { primariaComponent } from './primaria/primaria.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';

const routes: Routes = [
  {path:'Inicio', component: InicioComponent},
  {path:'**', redirectTo:'Inicio', pathMatch:'full'},
  {path:'Primaria', component: primariaComponent},
  {path:'**', redirectTo:'Primaria', pathMatch:'full'},
  {path:'Iniciosesion', component: IniciosesionComponent},
  {path:'**', redirectTo:'Iniciosesion', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
