import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MovieListPage  } from '../pages';


@Component({
  selector: 'channel-page',
  templateUrl: 'channel-page.html'
})
export class ChannelPage {


  channels = [
    { sigla: 'rtp1', name: 'RTP 1' },
    { sigla: 'rtp2', name: 'RTP 2' },
    { sigla: 'sic', name: 'SIC' },
    { sigla: 'tvi', name: 'TVI' }    
  ];

  constructor(private nav: NavController) {

  }

  GetMovies($event, channel) {
    this.nav.push(MovieListPage , channel);
  }


  goHome()
  {
    this.nav.popToRoot();
  }

}
