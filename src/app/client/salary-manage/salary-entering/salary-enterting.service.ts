import { Injectable } from '@angular/core';

// 异步取数
import { GAjaxService } from './../../../services/g-ajax.service';

@Injectable()
export class SalaryEntertingService {

  // 获得机构树
  orgTree_Select_ByParentUrl = '/api/M00002/OrgTree/Select_ByParent';

  constructor(
    private http: GAjaxService
  ) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  getOrgTreeData(parentID: string = '.' ) {
    return this.http.get(this.url(this.orgTree_Select_ByParentUrl) + `&parent=${parentID}`);
  }
}
