import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from './../about/about';
import { MenuSettingsPage } from './../menu-settings/menu-settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout(): void {
    this.navCtrl.push(AboutPage);
  }
onSettings(): void {
  this.navCtrl.push(MenuSettingsPage);
}
}
