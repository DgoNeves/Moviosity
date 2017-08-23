import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChannelPage  , MovieDetailsPage , MovieListPage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToChannels(){
    this.navCtrl.push(ChannelPage);
  }

}
