import { Component } from '@angular/core';
import { CarService } from './CarService/Car.service';

import { Car } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'W_AlSaub_MyFavouriteCar';
  car?: Car;
  searchById?: Car;

  constructor(private carService: CarService) {
    this.car;
    this.carService;
  }

  ngOnInit(): void {
    this.carService.getCarByIdObs(3).subscribe(selectedCar => {
      this.car = selectedCar;
    });
  }

  selectCarById(id: string): void {
    this.carService.getCarByIdObs(parseInt(id)).subscribe(selectedCar => {
      this.searchById = selectedCar;
    });
  }
}
