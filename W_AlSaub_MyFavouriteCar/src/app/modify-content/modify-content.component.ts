import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { CarService } from '../CarService/Car.service';

import { Car } from '../helper-files/content-interface';
import { carModels } from '../helper-files/contentDb';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newPokemonEvent: EventEmitter<Car> = new EventEmitter<Car>();
  newCar?: Car;

  constructor(private carService: CarService) {

  }


  ngOnInit(): void {
  }

  addCarToList(newContentItem: Car): void {
    this.carService.addContent(newContentItem).subscribe(newContentFromServer => {
      carModels.push(newContentItem);
    });
  }

}
