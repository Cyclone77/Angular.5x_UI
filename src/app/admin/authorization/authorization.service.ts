import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/primeng';
import { FormGroup, FormBuilder } from '@angular/forms';

// 异步取数
import { GAjaxService } from './../../services/g-ajax.service';

@Injectable()
export class AuthorizationService {

  // 全局参数
  // 模块选中节点
  public SelectNode: TreeNode;
  public SelectTblRow: TreeNode;

  // 获得模块树
  PolicyGroup_Select = '/api/Core/PolicyGroup/Select';
  // 删除模块
  PolicyGroup_Delete = '/api/Core/PolicyGroup/Delete';
  // 增加模块
  PolicyGroup_Insert = '/api/Core/PolicyGroup/Insert';
  // 更新模块
  PolicyGroup_Update = '/api/Core/PolicyGroup/Update';

  constructor(
    private http: GAjaxService
  ) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  // 获得模块树
  getModuleTree(parentId: number = -1) {
    return this.http.get(this.url(this.PolicyGroup_Select) + `&parentId=${parentId}`);
  }

  // 获得模块列表
  getModuleTbl(parentId: number = -1) {
    return this.http.get(this.url(this.PolicyGroup_Select) + `&parentId=${parentId}`);
  }

  // 删除模块
  deleteModule(parentId: number = -1) {
    return this.http.post(this.url(this.PolicyGroup_Delete) + `&parentId=${parentId}`);
  }

  // 增加模块
  addModule(validateForm: FormGroup) {
    return this.http.post(this.url(this.PolicyGroup_Insert), validateForm.value);
  }

  // 更新模块数据
  updataModule(validateForm: FormGroup) {
    return this.http.post(this.url(this.PolicyGroup_Update), validateForm.value);
  }
}
