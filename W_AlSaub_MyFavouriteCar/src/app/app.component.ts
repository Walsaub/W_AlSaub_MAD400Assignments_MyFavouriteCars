import { Component, OnInit } from '@angular/core';
import { CarService } from './CarService/Car.service';

import { Car } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'W_AlSaub_MyFavouriteCar';
  cars: Car[];

  constructor(private carService: CarService) {
    this.cars = [];
  }

  ngOnInit(): void {
    this.getContentFromServer();
  }

  getContentFromServer(): void {
    this.carService.getContent().subscribe(cararray => {
      console.log("Got the content from the server: ", cararray);
      this.cars = cararray;
    });
  }

}
