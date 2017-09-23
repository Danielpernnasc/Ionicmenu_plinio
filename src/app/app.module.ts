import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from './../pages/about/about';
import { MenuSettingsPage } from './../pages/menu-settings/menu-settings';
@NgModule({
  declarations: [
    AboutPage,
    MyApp,
    HomePage,
    MenuSettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
    //menuType: 'overlay' ou 'reveal' ou 'push'
    platforms: {
      ios: { menuType: 'reveal'
     },
     android:{
       menuType: 'overlay'
     },
     windows: {
       menuType: 'push'
     }
    }
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AboutPage,
    MyApp,
    HomePage,
    MenuSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
