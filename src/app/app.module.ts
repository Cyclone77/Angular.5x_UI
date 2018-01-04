import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

// Element UI 依赖
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';

// 加载路由模块
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,

    // 具体组件
    // MenuComponent,
    // LrcontrolComponent,
    // 其他页面
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    // ElModule.forRoot(),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
