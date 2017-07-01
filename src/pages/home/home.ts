import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ColetorPage } from '../coletor/coletor';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  abrirTelaColeta(){
    this.navCtrl.push(ColetorPage);
  }

  abrirTelaPerfil(){
    this.navCtrl.push(PerfilPage);
  }
}
