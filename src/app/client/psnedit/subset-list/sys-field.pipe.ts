import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sysField'
})
export class SysFieldPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    return value.filter(item => {
      // if (item['ItemType']) 
      if (!item['IsSystemField']) {
        return item;
      }
    });
  }

}
