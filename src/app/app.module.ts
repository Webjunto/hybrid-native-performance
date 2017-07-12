import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RouterModule } from '@angular/router';

import { MyApp } from './app.component';
import { routes } from './routes';
import { ListPage } from '../pages/list/list';
import { ItemsPage } from '../pages/items/items';
import { ItemPage } from '../pages/item/item';
import { PageNotFound } from '../pages/others/page-not-found';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    ItemsPage,
    ItemPage,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    ItemsPage,
    ItemPage,
    PageNotFound
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
