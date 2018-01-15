import { Injectable } from '@angular/core';
import { GAjaxService } from '../../../services/g-ajax.service';
import { UtilService } from '../../../services/util.service';

@Injectable()
export class SubsetListService {

  // 选中子集
  SelectSet: any;

  // 获得子集列表
  SetItem_Select = '/api/Core/SetItem/Select';

  // 获得人员信息
  Dynamic_Select = '/api/Core/Dynamic/Select';

  // 获得代码项
  CodeItem_Select = '/api/Core/CodeItem/Select';

  constructor(
    private http: GAjaxService,
    private util: UtilService
  ) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  // 获得人员信息
  getPersonData(data) {
    return this.http.post(this.url(this.Dynamic_Select), data);
  }

  // 获得子集字段
  getSetTableField(data) {
    return this.http.get(this.url(this.SetItem_Select) + '&' + this.util.toQueryString(data));
  }

  // 获得代码项
  getCodeItemData(data) {
    return this.http.get(this.url(this.CodeItem_Select) + '&' + this.util.toQueryString(data));
  }
}
