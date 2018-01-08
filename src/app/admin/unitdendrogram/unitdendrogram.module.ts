import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitdendrogramComponent } from './unitdendrogram.component';
import { ComponentsModule } from './../../components/components.module';
import { ElModule } from 'element-angular';

import { Routes, RouterModule } from '@angular/router';
import { OrganizationChartModule } from 'primeng/primeng';
const router: Routes = [
  { path: '', component: UnitdendrogramComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    OrganizationChartModule,
    RouterModule.forChild(router),
    ElModule.forRoot()
  ],
  declarations: [UnitdendrogramComponent]
})
export class UnitdendrogramModule { }
