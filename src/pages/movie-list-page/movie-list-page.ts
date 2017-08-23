import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'movie-list-page.html'
})


export class MovieListPage {

  channel: any;
  constructor(public navCtrl: NavController , private navParams: NavParams) {
    
    this.channel = this.navParams.data;

  } 

  goHome()
  {
    this.navCtrl.popToRoot();
  }

}
