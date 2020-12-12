import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { messageI } from '../model/message.interface';
import { observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataDbService {
   private contactCollection: AngularFirestoreCollection<messageI>;

  constructor(private afs: AngularFirestore) { 
    this.contactCollection = afs.collection<messageI>('contact')
  }

  saveMessage(newContact: messageI): void {
    this.contactCollection.add(newContact);
  }
}
