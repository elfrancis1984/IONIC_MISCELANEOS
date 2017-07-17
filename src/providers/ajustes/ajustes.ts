import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";

import { Storage } from '@ionic/storage';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrar_tutorial: true
  }

  constructor(private storage: Storage,
              private platform: Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage(){
    if(this.platform.is("cordova")){
      //Dispositivo

    }else{
      //Escritorio
      if(localStorage.getItem("ajustes")){
        this.ajustes = JSON.parse( localStorage.getItem("ajustes") );
      }
    }
  }

  guardar_storage(){
    if(this.platform.is("cordova")){
      //Dispositivo

    }else{
      //Escritorio
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
    }
  }

}
