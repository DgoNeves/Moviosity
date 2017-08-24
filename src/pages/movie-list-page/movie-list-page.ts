import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'movie-list-page.html'
})


export class MovieListPage {

  movies = [
    { Title: 'Test 1' , StartTime: '2017-08-23 23:10:00' , EndTime: '2017-08-23 23:10:00' },
    { Title: 'Test 2' , StartTime: '2017-08-24 23:10:00' , EndTime: '2017-08-24 23:10:00' },
    { Title: 'Test 3' , StartTime: '2017-08-25 23:10:00' , EndTime: '2017-08-25 23:10:00' },
  ];

  channel: any;
  constructor(public navCtrl: NavController , private navParams: NavParams) {
    
    this.channel = this.navParams.data;

  } 

  goHome()
  {
    this.navCtrl.popToRoot();
  }

}
