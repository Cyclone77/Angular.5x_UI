import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadlineComponent } from './headline/headline.component';
import { LrcontrolComponent } from './lrcontrol/lrcontrol.component';
import { UdcontrolComponent } from './udcontrol/udcontrol.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeadlineComponent,
    LrcontrolComponent,
    UdcontrolComponent
  ],
  exports: [
    HeadlineComponent,
    LrcontrolComponent,
    UdcontrolComponent
  ]
})
export class ComponentsModule { }
