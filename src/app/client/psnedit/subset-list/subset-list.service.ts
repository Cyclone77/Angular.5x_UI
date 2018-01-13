import { Injectable } from '@angular/core';
import { GAjaxService } from '../../../services/g-ajax.service';
import { UtilService } from '../../../services/util.service';

@Injectable()
export class SubsetListService {

  // 获得子集列表
  SetItem_Select = '/api/Core/SetItem/Select';

  constructor(
    private http: GAjaxService,
    private util: UtilService
  ) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  // 获得子集字段
  getSetTableField(data) {
    return this.http.get(this.url(this.SetItem_Select) + '&' + this.util.toQueryString(data));
  }
}
