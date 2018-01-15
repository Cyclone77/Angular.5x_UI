import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/primeng';
import { FormGroup, FormBuilder } from '@angular/forms';

// 异步取数
import { GAjaxService } from './../../../services/g-ajax.service';

@Injectable()
export class UseraccountManageService {

  // 全局参数
  // 模块选中节点
  public SelectNode: TreeNode;
  public SelectTblRow: TreeNode;


  //#region 授权分组树Api
  // 获得模块树
  private PolicyGroup_Select = '/api/Core/PolicyGroup/Select';
  // 删除模块
  private PolicyGroup_Delete = '/api/Core/PolicyGroup/Delete';
  // 增加模块
  private PolicyGroup_Insert = '/api/Core/PolicyGroup/Insert';
  // 更新模块
  private PolicyGroup_Update = '/api/Core/PolicyGroup/Update';
  //#endregion

  //#region 授权分组下的用户Api
  // 增加
  private MOD_Insert = '/api/Core/User/Insert';
  // 删除
  private MOD_Delete = '/api/Core/User/Delete';
  // 更新
  private MOD_Update = '/api/Core/User/Update';
  // 查询
  private MOD_Select = '/api/Core/User/SelectGroupUser';
  //#endregion



  constructor(
    private http: GAjaxService
  ) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  //#region 授权分组树
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
  //#endregion

  //#region 用户账户管理
  // 增加
  mod_insert(validateForm: FormGroup) {
    return this.http.post(this.url(this.MOD_Insert), validateForm.value);
  }
  // 删除
  mod_delete(keyId: any) {
    return this.http.post(this.url(this.MOD_Delete), {'USERID': keyId});
  }
  // 修改
  mod_update(validateForm: FormGroup) {
    return this.http.post(this.url(this.MOD_Update), validateForm.value);
  }
  mod_select(keyId: number = -1) {
    return this.http.get(this.url(this.MOD_Select) + `&keyId=${keyId}`);
  }
  //#endregion

}
