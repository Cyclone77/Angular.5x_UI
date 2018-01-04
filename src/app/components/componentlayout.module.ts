import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './../layout/header/header.component';
import { MenuComponent } from './../layout/menu/menu.component';

// Element UI依赖
import { ElModule } from 'element-angular';

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot()
  ],
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent
  ]
})
export class ComponentlayoutModule { }
