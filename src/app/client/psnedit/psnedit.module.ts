import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PsneditComponent } from './psnedit.component';
import { FormsModule } from '@angular/forms';
import {
  TabMenuModule,
  InputTextModule,
  ButtonModule,
  CheckboxModule,
  DataTableModule
} from 'primeng/primeng';

import { ComponentsModule } from './../../components/components.module';
// primeng UI
// import { AccordionModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { PsneditService } from './psnedit.service';
import { ElModule } from 'element-angular';
const router: Routes = [
  {
    path: '',
    component: PsneditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    // AccordionModule,
    TreeModule,
    TabMenuModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    DataTableModule
  ],
  declarations: [
    PsneditComponent,
    // ComponentsModule
  ],
  providers: [
    PsneditService
  ]
})
export class PsneditModule { }
