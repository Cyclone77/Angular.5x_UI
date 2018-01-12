import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// 服务
import { GAjaxService } from './../../services/g-ajax.service';
import { UserService } from './../../services/user.service';
import { PolicyService } from './policy.service';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../components/components.module';

// primeng UI
import { AccordionModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';

// 模块组件
import { PolicyComponent } from './policy.component';
import { UserOption, UserLogin } from './../../classes/user-login';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const router: Routes = [
  { path: '', component: PolicyComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    AccordionModule,
    TreeModule
  ],
  declarations: [
    PolicyComponent,
    AddComponent,
    EditComponent
  ],
  providers: [
    GAjaxService,
    UserService,
    UserOption,
    UserLogin,
    PolicyService
  ]
})
export class PolicyModule { }

