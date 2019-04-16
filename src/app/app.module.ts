import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// httpService
import { HttpService } from '../services/httpService'

import { HttpModule } from '@angular/http'
import { from } from 'rxjs';
import { TabsHideDirective } from './tabs-hide.directive';
import { PopupService } from 'src/services/popupService';
import { Network } from '@ionic-native/network/ngx';

@NgModule({
  declarations: [AppComponent, TabsHideDirective],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'ios'
  }), AppRoutingModule, HttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpService,
    PopupService,
    Network
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
