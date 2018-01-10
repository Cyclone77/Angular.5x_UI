import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
// 异步取数
import { GAjaxService } from './../../services/g-ajax.service';
import { HttpDataType } from '../../classes/http-data-type';

@Injectable()
export class UnitdendrogramService {

  // 选中节点
  // 模块选中节点
  public SelectNode: TreeNode;

  // 公用获得表数据
  Dynamic_Select = 'api/Core/Dynamic/Select';

  // 获得机构树
  OrgTree_Select_ByParent = '/api/M00002/OrgTree/Select_ByParent';

  constructor(
    private http: GAjaxService,
    private treeEvent: EventBus
  ) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  // 获得模块树
  getUnitTree(parentId: string = '.') {
    return this.http.get(this.url(this.OrgTree_Select_ByParent) + `&parent=${parentId}`);
  }

  // 获得B03数据
  getB03Data(option: HttpDataType) {
    return this.http.post(this.url(this.Dynamic_Select), option);
  }
}
