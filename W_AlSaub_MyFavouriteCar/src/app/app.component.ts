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

  constructor(private carService: CarService) {
    this.car;
  }

  ngOnInit(): void {
    this.carService.getCarByIdObs(3).subscribe(selectedCar => {
      this.car = selectedCar;
    });
  }
}
