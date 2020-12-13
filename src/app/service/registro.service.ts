import { Injectable } from '@angular/core';
import {Registro} from '../model/registro';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  regRef:AngularFireList<any>;
  registroseleccionado: Registro = new Registro();
  constructor(public firebase:AngularFireDatabase) { }

  listarDatos(){
    this.regRef = this.firebase.list('Personas');
    return this.regRef;
  }
  insertardatos(registros: Registro){
    this.regRef.push({
      nombre: registros.Nombre,
      apellido: registros.Apellido,
      edad: registros.Edad,
      telefono: registros.Telefono,
      email: registros.Email
    });

  }
}
