import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/primeng';
import { FormGroup, FormBuilder } from '@angular/forms';

// 异步取数
import { GAjaxService } from './../../../services/g-ajax.service';

@Injectable()
export class UsermoduleManageService {

  // 全局参数
  // 模块选中节点
  public SelectNode: TreeNode;
  public SelectTblRow: TreeNode;


  //#region 授权分组下的用户Api
  // 获得模块用户树
  private Tree_User_Select = '/api/Core/UserModule/SelectUserModuleTree';
  // 增加
  private MOD_Insert = '/api/Core/UserModule/Insert';
  // 删除
  private MOD_Delete = '/api/Core/UserModule/Delete';
  // 更新
  private MOD_Update = '/api/Core/UserModule/Update';
  // 查询
  private MOD_Select = '/api/Core/UserModule/Select';
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
    return this.http.get(this.url(this.Tree_User_Select) + `&parentId=${parentId}`);
  }
  //#endregion

  //#region 用户账户管理
  // 增加
  mod_insert(validateForm: FormGroup) {
    return this.http.post(this.url(this.MOD_Insert), validateForm.value);
  }
  // 删除
  mod_delete(keyId: any) {
    return this.http.post(this.url(this.MOD_Delete), {'USERID' : keyId});
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

