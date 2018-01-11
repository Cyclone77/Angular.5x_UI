import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadlineComponent } from './ui/headline/headline.component';
import { LrcontrolComponent } from './ui/lrcontrol/lrcontrol.component';
import { UdcontrolComponent } from './ui/udcontrol/udcontrol.component';

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
