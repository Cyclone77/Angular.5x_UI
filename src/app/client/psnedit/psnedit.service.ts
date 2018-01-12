import { Injectable } from '@angular/core';
import { GAjaxService } from '../../services/g-ajax.service';

@Injectable()
export class PsneditService {

  // 获得机构树
  OrgTree_Select_ByParent = '/api/M00002/OrgTree/Select_ByParent';

  // 获取人员
  Dynamic_Select = '/api/Core/Dynamic/Select';

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
    return this.http.get(this.url(this.OrgTree_Select_ByParent) + `&parent=${parentId}`);
  }

  // 获得人员简历
  getResume(data) {
    return this.http.post(this.url(this.Dynamic_Select), data);
  }
}
