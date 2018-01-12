import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/primeng';
import { FormGroup, FormBuilder } from '@angular/forms';

// 异步取数
import { GAjaxService } from './../../services/g-ajax.service';

@Injectable()
export class PolicyService {

  // 全局参数
  // 模块选中节点
  public SelectNode: TreeNode;
  public SelectTblRow: TreeNode;
  //#region 授权分组树
  // 获得模块树
  private PolicyGroup_Select:string = '/api/Core/PolicyGroup/Select';
  // 删除模块
  private PolicyGroup_Delete:string = '/api/Core/PolicyGroup/Delete';
  // 增加模块
  private PolicyGroup_Insert:string = '/api/Core/PolicyGroup/Insert';
  // 更新模块
  private PolicyGroup_Update:string = '/api/Core/PolicyGroup/Update';
  //#endregion

  //#region 角色管理

  // 授权分组下的用户
  private MOD_GroupUser:string = '/api/Core/Policy/SelectGroupUser';
  // 增加
  private MOD_Insert:string = '/api/Core/Policy/Insert';
  // 删除
  private MOD_Delete:string = '/api/Core/Policy/Delete';
  // 更新
  private MOD_Update:string = '/api/Core/Policy/Update';
  // 查询
  private MOD_Select:string = '/api/Core/Policy/Select';
  //#endregion

  constructor(
    private http: GAjaxService
  ) { }

  // 构建url
  url(action) {
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


  //#region 用户管理
  
  // 增加
  mod_insert(validateForm: FormGroup) {
    return this.http.post(this.url(this.MOD_Insert), validateForm.value);
  }
  // 删除
  mod_delete(keyId:any) {
    return this.http.post(this.url(this.MOD_Delete),{"POLICY_ID":keyId});
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