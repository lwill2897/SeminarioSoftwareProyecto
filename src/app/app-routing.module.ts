import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrimariaComponent } from './primaria/primaria.component';
import { PreescolarComponent } from './preescolar/preescolar.component';
import { SecundariaComponent } from './secundaria/secundaria.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'Inicio', component: InicioComponent},
  {path:'', redirectTo:'Inicio', pathMatch:'full'},
  {path:'Primaria', component: PrimariaComponent},
  {path:'', redirectTo:'Primaria', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'', redirectTo:'Login', pathMatch:'full'},
  {path:'Preescolar', component: PreescolarComponent},
  {path:'', redirectTo:'Preescolar', pathMatch:'full'},
  {path:'Secundaria', component: SecundariaComponent},
  {path:'', redirectTo:'Secundaria', pathMatch:'full'},
  {path:'Nosotros', component: NosotrosComponent},
  {path:'', redirectTo:'Nosotros', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
