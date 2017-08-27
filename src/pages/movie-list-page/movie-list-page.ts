import { Component } from '@angular/core';
import { LoadingController, NavController , NavParams } from 'ionic-angular';
import { ChannelApi  } from '../../shared/shared';

import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  templateUrl: 'movie-list-page.html'
})


export class MovieListPage {

  dateFilter: string;
  movies: any;

  allMovies: any;
  channel: any;
  useDateFilter = false;

  constructor(
    private navCtrl: NavController , 
    private navParams: NavParams,
    private channelApi: ChannelApi,
    private load: LoadingController) {  } 


    ionViewCanEnter(){
        this.channel = this.navParams.data;
    }

  ionViewDidLoad(){
    
    let loader = this.load.create({
      content: '<b> Loading Channel Data... </b>'
    });
    
    loader.present().then(() =>{
      if(this.allMovies == undefined){

        this.channelApi.getChannelInfo(this.channel.sigla)
        .then(data => this.allMovies = data)
        .then(data => this.movies = data)
        .then(x => loader.dismiss())
        .catch(x => {loader.dismiss(); console.log(x)});
      }
      else
      {
        loader.dismiss();
      }

    });

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
