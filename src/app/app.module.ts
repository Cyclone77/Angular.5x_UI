import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogonComponent } from './views/logon/logon.component';
import { HomeComponent } from './views/home/home.component';

import { routers } from './router';

// import module
import { ElModule } from 'element-angular';
import { MenuComponent } from './views/home/menu/menu.component';
import { HeaderComponent } from './views/home/header/header.component';
import { IndexComponent } from './views/index/index.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { Page404Component } from './views/page404/page404.component';


import { PsneditComponent } from './client/psnedit/psnedit.component';
import { SalarypostComponent } from './client/salarypost/salarypost.component';
import { SalaryenteringComponent } from './client/salaryentering/salaryentering.component';
import { LrcontrolComponent } from './components/lrcontrol/lrcontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    HomeComponent,
    PsneditComponent,
    MenuComponent,
    HeaderComponent,
    IndexComponent,
    SalarypostComponent,
    HeadlineComponent,
    SalaryenteringComponent,
    Page404Component,
    LrcontrolComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    ElModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
