import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newCarEvent: EventEmitter<Car> = new EventEmitter<Car>();
  newCar?: Car;

  constructor() { }

  ngOnInit(): void {
  }

  addCar(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    this.newCar = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    };
    this.newCarEvent.emit(this.newCar);
  }

}
