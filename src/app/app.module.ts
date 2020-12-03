import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PreescolarComponent } from './preescolar/preescolar.component';
import { PrimariaComponent } from './primaria/primaria.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PopularComponent } from './popular/popular.component';
import { RegistroComponent } from './registro/registro.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreescolarComponent,
    PrimariaComponent,
    NosotrosComponent,
    PopularComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
