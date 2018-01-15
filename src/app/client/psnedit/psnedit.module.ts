import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PsneditComponent } from './psnedit.component';
import { FormsModule } from '@angular/forms';
import {
  TabViewModule,
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
import { UtilService } from '../../services/util.service';

const router: Routes = [
  { path: '', component: PsneditComponent },
  { path: 'subset-list', loadChildren: './subset-list/subset-list.module#SubsetListModule' }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    // AccordionModule,
    TreeModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    DataTableModule,
    ReactiveFormsModule
  ],
  declarations: [
    PsneditComponent
    // ComponentsModule
  ],
  providers: [
    PsneditService,
    UtilService
  ]
})
export class PsneditModule { }
