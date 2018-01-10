import { Injectable } from '@angular/core';

// 异步取数
import { GAjaxService } from './../../services/g-ajax.service';

@Injectable()
export class SalaryPostService {

  // 请求地址
  getColUrl = '/api/Core/CodeItem/Select';
  getDataUrl = '/api/M00001/Standard/SelectBy_Type';
  updateUrl = '/api/M00001/Standard/UpdateBy_Salary';

  constructor(private http: GAjaxService) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  // 获取表格列信息
  getColData() {
    return this.http.get(this.getColUrl + '?moduleId=M00001&codeId=SDXJ');
  }

  // 获取表格数据
  loadData(type: string) {
    return this.http.get(this.getDataUrl + '?standardType=' + type);
  }

  updateField(obj: any) {
    return this.http.post(this.updateUrl, obj);
  }
}
