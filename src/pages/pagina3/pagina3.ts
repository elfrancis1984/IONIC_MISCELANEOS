import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'mi-pagina3'
})
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");

    let numero = Math.round( Math.random() * 10);
    console.log(numero);
    if(numero >= 5){
      return true;
    }else{
      return false;
    }
  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave");
    console.log("Espere 2 segundos para salir");

    let promesa = new Promise((resolve,reject)=>{
      setTimeout(
        ()=>{
          resolve(true)
        },2000);
    });

    return promesa;
  }

}
