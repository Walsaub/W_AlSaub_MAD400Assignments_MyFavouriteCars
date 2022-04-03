import { Component, OnInit } from '@angular/core';
import { CarService } from '../CarService/Car.service';

import { Car } from '../helper-files/content-interface';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService, private messageService: MessageService) {
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
    this.carService.getContent().subscribe(listOfCars => {
      this.cars = listOfCars;
      this.messageService.add("List loaded successfully!");
    });
  }

  addContentToList(newContent: Car): void {
    this.messageService.add("New content added and sent to list, id number is " + newContent.id)
    this.carService.getContent().subscribe(listOfCars => {
      this.cars = listOfCars;
      this.messageService.add("New content added and displayed on the list!");
    });
  }

  updateContentOnList(): void {
    this.carService.getContent().subscribe(listOfCars => {
      this.cars = listOfCars;
      this.messageService.add("Content on the list updated!");
    });
  }

}
