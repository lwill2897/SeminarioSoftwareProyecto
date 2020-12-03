import { Injectable } from '@angular/core';
import {Registro} from '../model/registro';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  regRef:AngularFireList<any>;
  constructor(private rdb:AngularFireDatabase) { }
  listarDatos(){
    this.regRef = this.rdb.list('Personas');
    return this.regRef;
  }
}
