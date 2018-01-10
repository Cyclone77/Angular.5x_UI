import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
import { OrganOptionComponent } from './organ-option/organ-option.component';
import { LegalRepresetComponent } from './legal-represet/legal-represet.component';

const router: Routes = [
  {
    path: '',
    component: UnitdendrogramComponent,
    children: [
      { path: '', redirectTo: 'organ-option', pathMatch: 'full' },
      { path: 'organ-option', component: OrganOptionComponent },
      { path: 'legal-represet', component: LegalRepresetComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AccordionModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    TreeModule,
    ReactiveFormsModule
  ],
  providers: [
    UnitdendrogramService,
    GAjaxService,
    UserService,
    UserOption,
    UserLogin
  ],
  declarations: [
    UnitdendrogramComponent,
    OrganOptionComponent,
    LegalRepresetComponent
  ]
})
export class UnitdendrogramModule { }
