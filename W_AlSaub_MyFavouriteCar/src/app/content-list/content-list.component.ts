import { Component, OnInit } from '@angular/core';
import { CarService } from '../CarService/Car.service';

import { Car } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) {
    this.cars = [];

  }

  search(sTerm: string): string {
    let exist: boolean = false;
    this.cars.forEach(function (car) {
      if (car.title == sTerm) {
        exist = true
      }
    });
    if (exist) {
      return "The title you entered does exist";
    } else {
      return "The title you entered does not exist";
    }
  }

  ngOnInit(): void {
  }

}
