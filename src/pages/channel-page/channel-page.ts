import { Component } from '@angular/core';
import { LoadingController , NavController } from 'ionic-angular';


import { MovieListPage  } from '../pages';
import { ChannelApi  } from '../../shared/shared';



@Component({
  selector: 'channel-page',
  templateUrl: 'channel-page.html'
})
export class ChannelPage {


  channels: any;
  constructor(
    private nav: NavController , 
    private channelApi: ChannelApi,
    private load: LoadingController) {

    
  }

  ionViewDidLoad(){
   
    let loader = this.load.create({
      content: '<b> Loading Channels... </b>'
    });
    
    loader.present().then(() =>{
      if(this.channels == undefined){

        this.channelApi.getChannels()
        .then(data => this.channels = data)
        .then(x => loader.dismiss())
        .catch(x => {loader.dismiss(); console.log(x)});

      }
      else
      {
        loader.dismiss();
      }

    });

  }

  GetMovies($event, channel) {
    this.nav.push(MovieListPage , channel);
  }


  goHome()
  {
    this.nav.popToRoot();
  }

}
