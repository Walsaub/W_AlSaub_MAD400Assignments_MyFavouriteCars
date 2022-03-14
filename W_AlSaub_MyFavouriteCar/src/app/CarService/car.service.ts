import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../helper-files/content-interface';
import { carModels } from '../helper-files/contentDb';
import { MessageService } from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private messageService: MessageService) { }

  getContentObs(): Observable<Car[]> {
    this.messageService.add("Content array loaded!");
    return of(carModels);
  }

  getCarByIdObs(id: number): Observable<Car> {
    let exist: boolean = false;
    let carByid: Car = {
      id: 100,
      title: "",
      description: "",
      creator: ""
    };
    carModels.forEach(function (car) {
      if (car.id == id) {
        carByid = car;
        exist = true;
      }
    });
    if (exist) {
      this.messageService.add("Content Item at id: " + id + " loaded!");
    } else {
      this.messageService.add("Content Item at id: " + id + " does not exist.");
    }
    
    return of(carByid);
  }
}
