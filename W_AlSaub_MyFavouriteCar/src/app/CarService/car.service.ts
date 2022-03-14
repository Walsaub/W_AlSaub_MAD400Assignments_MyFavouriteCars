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

  getCarByIdObs(id: number): Observable<Car> {
    let carByid: Car = {
      id: 100,
      title: "",
      description: "",
      creator: ""
    };
    carModels.forEach(function (car) {
      if (car.id == id) {
        carByid = car;
      }
    });
    return of(carByid);
  }
}
