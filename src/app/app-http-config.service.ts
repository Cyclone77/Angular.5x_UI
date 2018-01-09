import { Injectable } from '@angular/core';

@Injectable()
export class AppHttpConfigService {

  constructor() { }

  // 后台-授权分组
  ADMIN_AUTHORIZATION = 'http://192.168.0.50:8080';
}
