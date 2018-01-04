import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 具体页面组件
import { IndexComponent } from './index.component';

const router: Routes = [
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    IndexComponent
  ]
})
export class IndexModule { }
