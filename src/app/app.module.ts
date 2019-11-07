import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyCEyuFy7rfaDtoIiPY9iDIDSQOQ4iiSCGI",
  authDomain: "usjt-ccp3bnmcb-notablenotes.firebaseapp.com",
  databaseURL: "https://usjt-ccp3bnmcb-notablenotes.firebaseio.com",
  projectId: "usjt-ccp3bnmcb-notablenotes",
  storageBucket: "usjt-ccp3bnmcb-notablenotes.appspot.com",
  messagingSenderId: "408342406192",
  appId: "1:408342406192:web:bf52f44135a6777fcdf9f5",
  measurementId: "G-WE6VCNP3XD"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
