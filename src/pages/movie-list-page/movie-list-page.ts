import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';

import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  templateUrl: 'movie-list-page.html'
})


export class MovieListPage {

  dateFilter: string;
  movies = [
    { Title: 'Test 1' , StartTime: '2017-08-23' , EndTime: '2017-08-23 23:10:00' },
    { Title: 'Test 2' , StartTime: '2017-08-24' , EndTime: '2017-08-24 23:10:00' },
    { Title: 'Test 3' , StartTime: '2017-08-26' , EndTime: '2017-08-25 23:10:00' },
    { Title: 'Test 4' , StartTime: '2017-09-26' , EndTime: '2017-08-25 23:10:00' },
  ];

  allMovies: any[];
  channel: any;
  useDateFilter = false;

  constructor(
    private navCtrl: NavController , 
    private navParams: NavParams) {  } 


    ionViewCanEnter(){
      this.channel = this.navParams.data;
      this.allMovies = this.movies;
    }

  ionViewDidLoad(){
    
  }

  dateChanged(){

    if(this.useDateFilter)
    {
      this.movies = _.filter(this.allMovies, m => moment(m.StartTime , "YYYY-MM-DD").isSame(this.dateFilter, 'day'));
    }
    else
    {
      this.movies = this.allMovies;
    }
   
  }

  goHome()
  {
    this.navCtrl.popToRoot();
  }

}
