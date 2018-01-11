import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UnitdendrogramComponent } from './unitdendrogram.component';
import { ComponentsModule } from './../../components/components.module';
import { ElModule } from 'element-angular';

import { Routes, RouterModule } from '@angular/router';
import { TreeModule, DataTableModule, GrowlModule } from 'primeng/primeng';

// 服务
import { GAjaxService } from './../../services/g-ajax.service';
import { UserService } from './../../services/user.service';
import { UserOption, UserLogin } from './../../classes/user-login';

import { UnitdendrogramService } from './unitdendrogram.service';
import { OrganOptionComponent } from './organ-option/organ-option.component';
import { LegalRepresetComponent } from './legal-represet/legal-represet.component';
import { EventBusService } from '../../services/event-bus.service';
import { UnitRenameComponent } from './unit-rename/unit-rename.component';

const router: Routes = [
  {
    path: '',
    component: UnitdendrogramComponent,
    children: [
      { path: '', redirectTo: 'organ-option', pathMatch: 'full' },
      { path: 'organ-option', component: OrganOptionComponent },
      { path: 'legal-represet', component: LegalRepresetComponent },
      { path: 'unit-rename', component: UnitRenameComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    TreeModule,
    ReactiveFormsModule,
    DataTableModule,
    GrowlModule
  ],
  providers: [
    UnitdendrogramService,
    GAjaxService,
    // UserService,
    UserOption,
    UserLogin,
    EventBusService
  ],
  declarations: [
    UnitdendrogramComponent,
    OrganOptionComponent,
    LegalRepresetComponent,
    UnitRenameComponent
  ]
})
export class UnitdendrogramModule { }
