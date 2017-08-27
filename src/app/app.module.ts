import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { Http, HttpModule } from '@angular/http';

import { ChannelApi } from  '../shared/shared';
import { ChannelPage ,HomePage , MovieDetailsPage , MovieListPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChannelPage,
    MovieDetailsPage,
    MovieListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChannelPage,
    MovieDetailsPage,
    MovieListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    ChannelApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
