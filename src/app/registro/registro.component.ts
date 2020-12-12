import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataDbService} from '../service/data-db.service';
import {Registro} from '../model/registro'
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'registroform',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  createFormGroup(){
    return new FormGroup({
      Apellido: new FormControl(''),
      Direccion: new FormControl(''),
      Email: new FormControl(''),
      Nombre: new FormControl(''),
      Telefono: new FormControl('')
    })
  }

   contactForm: FormGroup;
  constructor( private dbData: DataDbService ) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {
  
    }
   onResetForm(){
     this.contactForm.reset();
   }
  
   onSaveForm(){
     
     this.dbData.saveMessage(this.contactForm.value);
   }

  }

