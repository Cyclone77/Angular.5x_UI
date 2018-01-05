import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

// ui组件
import { ElModule } from 'element-angular';

const router: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    ElModule.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
