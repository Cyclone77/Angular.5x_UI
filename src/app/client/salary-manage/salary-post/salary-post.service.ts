import { Injectable } from '@angular/core';

// 异步取数
import { GAjaxService } from './../../../services/g-ajax.service';

@Injectable()
export class SalaryPostService {

  // 请求地址
  moduleId = 'M00001';
  getColUrl = '/api/Core/CodeItem/Select';
  getDataUrl = '/api/' + this.moduleId + '/Standard/SelectBy_Type';
  updateUrl = '/api/' + this.moduleId + '/Standard/UpdateBy_Salary';

  constructor(private http: GAjaxService) { }

  // 构建url
  url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  // 获取表格列信息
  getColData() {
    return this.http.get(this.url(this.getColUrl) + '&moduleId=' + this.moduleId + '&codeId=SDXJ');
  }

  // 获取表格数据
  loadData(type: string) {
    return this.http.get(this.url(this.getDataUrl) + '&standardType=' + type);
  }

  updateField(obj: any) {
    return this.http.post(this.url(this.updateUrl), obj);
  }
}
