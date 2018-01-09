import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitdendrogramComponent } from './unitdendrogram.component';
import { ComponentsModule } from './../../components/components.module';
import { ElModule } from 'element-angular';

import { Routes, RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';

// 服务
import { GAjaxService } from './../../services/g-ajax.service';
import { UserService } from './../../services/user.service';
import { UserOption, UserLogin } from './../../classes/user-login';

import { UnitdendrogramService } from './unitdendrogram.service';

const router: Routes = [
  { path: '', component: UnitdendrogramComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AccordionModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    TreeModule
  ],
  providers: [
    UnitdendrogramService,
    GAjaxService,
    UserService,
    UserOption,
    UserLogin
  ],
  declarations: [UnitdendrogramComponent]
})
export class UnitdendrogramModule { }
