import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PreescolarComponent } from './preescolar/preescolar.component';
import { PrimariaComponent } from './primaria/primaria.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreescolarComponent,
    PrimariaComponent,
    NosotrosComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
