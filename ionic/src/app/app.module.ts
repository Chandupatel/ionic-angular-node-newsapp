import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OptionsComponent } from './components/options/options.component';
import { NewsoptionComponent } from './components/newsoption/newsoption.component';
import { DeletesavedComponent } from './components/deletesaved/deletesaved.component';

import { HttpClientModule } from '@angular/common/http';

import { FCM } from '@ionic-native/fcm/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [
  AppComponent,
  OptionsComponent,
  NewsoptionComponent,
  DeletesavedComponent
  ],

  entryComponents: [
  OptionsComponent,
  NewsoptionComponent,
  DeletesavedComponent
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, ToastrModule.forRoot()
  ],

  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    FormsModule,
    ReactiveFormsModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
