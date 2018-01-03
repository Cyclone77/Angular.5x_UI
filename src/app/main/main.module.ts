import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// angular自带组件
import { CommonModule } from '@angular/common';

// Element UI依赖
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';

// 布局组件
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './../components/headline/headline.component';
import { LrcontrolComponent } from './../components/lrcontrol/lrcontrol.component';

// 具体功能组件
import { IndexComponent } from './../client/index/index.component';
import { SalaryenteringComponent } from './../client/salaryentering/salaryentering.component';
import { SalarypostComponent } from '../client/salarypost/salarypost.component';
import { PsneditComponent } from '../client/psnedit/psnedit.component';

// 具体路由

const mainRoutes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [
  //     { path: '', redirectTo: 'index', pathMatch: 'full' },
  //     { path: 'index', component: IndexComponent }
  //   ]
  // }
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent },
      { path: 'salaryentering', component: SalaryenteringComponent },
      { path: 'salarypost', component: SalarypostComponent },
      { path: 'psnedit', component: PsneditComponent },
      {
        path: 'backstage',
        loadChildren: 'app/backstage/backstage.module#BackstageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,

    CommonModule,
    ElModule.forRoot(),
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    MenuComponent,
    HeaderComponent,
    MainComponent,

    HeadlineComponent,
    LrcontrolComponent,
    // 具体组件
    IndexComponent,
    SalaryenteringComponent,
    SalarypostComponent,
    PsneditComponent
  ]
})
export class MainModule { }
