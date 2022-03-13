import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../helper-files/content-interface';
import { carModels } from '../helper-files/contentDb';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getContentObs(): Observable<Car[]> {
    return of(carModels);
  }
}
