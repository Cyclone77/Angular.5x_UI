import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './../../components/components.module';
import { ElModule } from 'element-angular';

const router: Routes = [
  { path: '', component: RoleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router),
    ElModule.forRoot()
  ],
  declarations: [
    RoleComponent
  ]
})
export class RoleModule { }
