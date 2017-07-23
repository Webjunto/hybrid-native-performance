import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { listsReducer, itemsReducer } from '../store/reducers';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { ItemPage } from '../pages/item/item';

// export function instrumentOptions() {
//   return {
//     monitor: useLogMonitor({ visible: true, position: 'right' })
//   };
// }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemsPage,
    ItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({ listsReducer, itemsReducer }),
    StoreDevtoolsModule.instrumentStore(),
    // StoreDevtoolsModule.instrumentStore(instrumentOptions),
    // StoreLogMonitorModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemsPage,
    ItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
