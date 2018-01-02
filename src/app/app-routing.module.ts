import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 具体组件
import { Page404Component } from './views/page404/page404.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './views/login/login.module#LoginModule'
  },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule'
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
