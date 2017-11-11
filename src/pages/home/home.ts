import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  tasks: FirebaseListObservable<any[]>;

  newTask = { name: '' };
  newCheck = { check: '' };



  constructor(public db: AngularFireDatabase,private alertCtrl: AlertController) {
    this.tasks = db.list('/tasks');
  }

  updateTask(key, name) {
    this.tasks.update(key, { name: name });
  }


  removeTask(task) {
    this.tasks.remove(task);
  }


  addTask(newTask) {
    this.tasks.push(newTask);
    this.newTask = { name: '' };
  }



  updateCheck(key, check) {
    this.tasks.update(key, { check: check });


  }



  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Creado por: ',
      subTitle: 'Alba Plascencia,   Karen Gutierrez,   Alejandra Contreras',
     
      buttons: ['Cerrar']
    });
    alert.present();
  }


}
