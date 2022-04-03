import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { CarService } from '../CarService/Car.service';

import { Car } from '../helper-files/content-interface';


@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  newContent: Car;
  temptags: string = "";
  tempid: string = "";
  @Output() newContentEvent: EventEmitter<Car> = new EventEmitter<Car>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();
  newCar?: Car;

  constructor(private carService: CarService) {
    this.newContent = { title: '', description: '', creator: '' };
  }


  ngOnInit(): void { }

  modifyOrAddItemToParent(): void {
    if (this.tempid !== "") {
      this.newContent.tags = this.temptags ? this.temptags.split(",") : [];
      this.newContent.id = parseInt(this.tempid);
      this.carService.updateContent(this.newContent).subscribe(() => {
        this.updateContentEvent.emit();
        this.newContent = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.temptags = "";
        this.tempid = "";
      });
    }
    else {
      this.newContent.tags = this.temptags ? this.temptags.split(",") : [];
      this.carService.addContent(this.newContent).subscribe(newContentFromServer => {
        this.newContentEvent.emit(newContentFromServer);
        this.newContent = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.temptags = "";
      });
    }
  }

  /*addCarToList(newContentItem: Car): void {
    this.carService.addContent(newContentItem).subscribe(newContentFromServer => {
      carModels.push(newContentItem);
    });
  }*/

}
