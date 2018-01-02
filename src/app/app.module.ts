import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

// Element UI 依赖
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';

// 加载路由模块
import { AppRoutingModule } from './app-routing.module';

// 具体组件
import { MenuComponent } from './main/menu/menu.component';

// 错误页面
import { Page404Component } from './views/page404/page404.component';



@NgModule({
  declarations: [
    AppComponent,

    // 具体组件
    // MenuComponent,
    // 其他页面
    Page404Component
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
