import { Injectable } from '@angular/core';
import { GAjaxService } from '../../services/g-ajax.service';
import { UtilService } from '../../services/util.service';

@Injectable()
export class PsneditService {

  // 选择人员
  Person_Data: any;

  // 获得机构树
  OrgTree_Select_ByParent = '/api/M00002/OrgTree/Select_ByParent';

  // 获取人员
  Dynamic_Select = '/api/M00003/A01/GetPersonList';

  // 获得人员库
  PClassList = '/api/M00003/A01/GetPClassList';

  // 人员归属
  Ascription = '/api/M00003/A01/GetAscriptionList';

  constructor(
    private http: GAjaxService,
    private util: UtilService
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

  // 获得人员列表
  getResume(data) {
    return this.http.post(this.url(this.Dynamic_Select), data);
  }

  // 获得人员库
  getPClassList(data) {
    return this.http.get(this.url(this.PClassList) + '&' + this.util.toQueryString(data));
  }

  // 获得人员归属
  GetAscription(data) {
    return this.http.get(this.url(this.Ascription) + '&' + this.util.toQueryString(data));
  }
}
