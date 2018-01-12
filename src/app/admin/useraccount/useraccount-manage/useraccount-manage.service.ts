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


  //#region 授权分组树
  // 获得模块树
  PolicyGroup_Select = '/api/Core/PolicyGroup/Select';
  // 删除模块
  PolicyGroup_Delete = '/api/Core/PolicyGroup/Delete';
  // 增加模块
  PolicyGroup_Insert = '/api/Core/PolicyGroup/Insert';
  // 更新模块
  PolicyGroup_Update = '/api/Core/PolicyGroup/Update';
  //#endregion

  //#region 用户管理
  // 获得用户
  User_Select = '/api/Core/User/Select';
  // 授权分组下的用户
  User_GroupUser = '/api/Core/User/SelectGroupUser';
  // 删除模块
  User_Delete = '/api/Core/User/Delete';
  // 增加模块
  User_Insert = '/api/Core/User/Insert';
  // 更新模块
  User_Update = '/api/Core/User/Update';
  //#endregion

  Test_Demo = '/api/Core/SetItem/Select';



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


  //#region 用户管理
  // 获得授权分组用户
  getUserTbl(groupId: number = -1) {
    //return this.http.get(this.url(this.Test_Demo) + `&moduleId=M00001&setId=SALARY`);
    return this.http.get(this.url(this.User_GroupUser) + `&groupId=${groupId}`);
  }

  // 删除用户
  deleteUser(parentId: number = -1) {
    return this.http.post(this.url(this.User_Delete) + `&parentId=${parentId}`);
  }

  // 增加用户
  addUser(validateForm: FormGroup) {
    return this.http.post(this.url(this.User_Insert), validateForm.value);
  }

  // 更新用户数据
  updataUser(validateForm: FormGroup) {
    return this.http.post(this.url(this.User_Update), validateForm.value);
  }
  //#endregion

}
