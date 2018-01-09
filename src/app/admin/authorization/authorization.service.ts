import { Injectable } from '@angular/core';

// 异步取数
import { GAjaxService } from './../../services/g-ajax.service';
import { AppHttpConfigService } from './../../app-http-config.service';

@Injectable()
export class AuthorizationService {

  // 获得模块树
  PolicyGroup_Select = '/api/Core/PolicyGroup_Select';
  // 删除模块
  PolicyGroup_Delete = '/api/Core/PolicyGroup_Delete';

  constructor(
    private http: GAjaxService,
    private address: AppHttpConfigService
  ) { }

  // 构建url
  url(action) {
    return this.address.ADMIN_AUTHORIZATION + action;
  }

  // 获得模块树
  getModuleTree(parentId: number = -1) {
    return this.http.get(this.url(this.PolicyGroup_Select) + `?parentId=${parentId}`);
  }

  // 获得模块列表
  getModuleTbl(parentId: number = -1) {
    return this.http.get(this.url(this.PolicyGroup_Select) + `?parentId=${parentId}`);
  }

  // 删除模块
  deleteModule(parentId: number = -1) {
    return this.http.post(this.url(this.PolicyGroup_Delete) + `?parentId=${parentId}`);
  }
}
