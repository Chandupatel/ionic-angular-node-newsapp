import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RouterModule, Routes } from '@angular/router';
import { AddtabComponent } from './addtab/addtab.component';
import { AddnewsComponent } from './addnews/addnews.component';
// import { FormsModule } from '@angular/forms';
import { S1Service } from './s1.service';
import { HttpClientModule } from '@angular/common/http';
import { DtitleComponent } from './dtitle/dtitle.component';
import { DmenuComponent } from './dmenu/dmenu.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
{path: 'dashboard', component: DashboardComponent},
{path: 'user',
children:[{path:'', component: UserComponent},
{path:'userupdate/:email', component: UserupdateComponent}]},
{path: 'ratings', component: RatingsComponent},
{path: 'addnews', component: AddnewsComponent},
{path: 'addtab', component: AddtabComponent},
{path: 'userupdate:email', component: UserupdateComponent},
{path: '',redirectTo: '/dashboard', pathMatch:'full'}
];


@NgModule({
  declarations: [
  AppComponent,
  DashboardComponent,
  UserComponent,
  RatingsComponent,
  AddtabComponent,
  AddnewsComponent,
  DtitleComponent,
  DmenuComponent,
  UserupdateComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
