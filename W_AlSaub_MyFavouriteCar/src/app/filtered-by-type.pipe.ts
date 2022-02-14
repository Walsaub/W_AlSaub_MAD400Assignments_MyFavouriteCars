import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './helper-files/content-interface';

@Pipe({
  name: 'filteredByType'
})
export class FilteredByTypePipe implements PipeTransform {

  transform(carModels: Car[], dType?: string): Car[] {
    if (!dType) {
      return carModels.filter(function (c) {
        return c.type == null;
      });
    }
    return carModels.filter(function (c) {
      return c.type == dType;
    });
  }

}
