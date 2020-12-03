import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../service/registro.service'
import {Registro} from '../model/registro'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  Dato:Registro[];

  constructor( public leerPersona : RegistroService) { }

  ngOnInit(): void {
    let s = this.leerPersona.listarDatos();

    s.snapshotChanges().subscribe(data => {
      this.Dato = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['Skey'] = item.key;
        this.Dato.push(a as Registro)
      })
    })
  }

}
