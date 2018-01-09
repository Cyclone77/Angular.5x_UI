import { Injectable } from '@angular/core';

// 异步取数
import { GAjaxService } from './../../services/g-ajax.service';

@Injectable()
export class UnitdendrogramService {

  // 获得机构树
  OrgTree_Select_ByParent = '/api/Core/OrgTree_Select_ByParent';

  constructor(
    private http: GAjaxService
  ) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  // 获得模块树
  getUnitTree(parentId: string = '.') {
    return this.http.get(this.url(this.OrgTree_Select_ByParent) + `&moduleId=M00001&parentId=${parentId}`);
  }
}
