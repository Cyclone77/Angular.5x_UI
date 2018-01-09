import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// 服务
import { GAjaxService } from './../../services/g-ajax.service';
import { UserService } from './../../services/user.service';
import { AuthorizationService } from './authorization.service';
import { AppHttpConfigService } from './../../app-http-config.service';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../components/components.module';

// primeng UI
import { AccordionModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';

import { AuthorizationComponent } from './authorization.component';
import { AddComponent } from './add/add.component';
import { UserOption, UserLogin } from './../../classes/user-login';
import { EditComponent } from './edit/edit.component';

const router: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    // FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    AccordionModule,
    TreeModule
  ],
  declarations: [
    AuthorizationComponent,
    AddComponent,
    EditComponent
  ],
  providers: [
    GAjaxService,
    UserService,
    UserOption,
    UserLogin,
    AuthorizationService,
    AppHttpConfigService
  ]
})
export class AuthorizationModule { }
