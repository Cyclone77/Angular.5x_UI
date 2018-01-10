import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// UI 组件
import { ElModule } from 'element-angular';

// 公用组件
import { ComponentsModule } from './../../components/components.module';
import { GAjaxService } from './../../services/g-ajax.service';
import { UserService } from './../../services/user.service';
import { UserOption } from './../../classes/user-login';
import { SalaryPostService} from './salaryPost.service';

// 具体页面组件
import { SalaryPostComponent } from './salaryPost.component';

import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

const router: Routes = [
  { path: '', component: SalaryPostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot(),
    ComponentsModule,
    RouterModule.forChild(router),
    DataTableModule,
    SharedModule,
    GrowlModule
  ],
  declarations: [
    SalaryPostComponent,
    // HeadlineComponent,
    // ComponentsModule
  ],
  providers: [
    GAjaxService,
    UserService,
    UserOption,
    SalaryPostService
  ]
})
export class SalaryPostModule { }
