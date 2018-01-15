import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ElModule } from 'element-angular';

import {
  CheckboxModule,
  DataTableModule
} from 'primeng/primeng';

import { ComponentsModule } from './../../../components/components.module';

import { SubsetListComponent } from './subset-list.component';
import { SysFieldPipe } from './sys-field.pipe';
import { EditChildSetComponent } from './edit-child-set/edit-child-set.component';

const router: Routes = [
  { path: '', component: SubsetListComponent },
  { path: 'edit-child-set', component: EditChildSetComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    CheckboxModule,
    DataTableModule,
    ComponentsModule
  ],
  declarations: [
    SysFieldPipe,
    SubsetListComponent,
    EditChildSetComponent
  ]
})
export class SubsetListModule { }
