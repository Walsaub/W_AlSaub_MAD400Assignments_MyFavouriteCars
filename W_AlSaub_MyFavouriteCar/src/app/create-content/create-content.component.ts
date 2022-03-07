import { Input, ViewChild } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newCarEvent: EventEmitter<Car> = new EventEmitter<Car>();
  @ViewChild('id') inputId: any;
  @ViewChild('title') inputTitle: any;
  @ViewChild('description') inputDescription: any;
  @ViewChild('creator') inputCreator: any;
  @ViewChild('imgURL') inputImgURL: any;
  @ViewChild('type') inputType: any;
  @ViewChild('tags') inputTags: any;
  newCar?: Car;
  success?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addCar(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    let addPromisr = new Promise((resolve, reject) => {
      if (id != null && title != null && description != null && creator != null) {
        resolve("The addition is successful, the title is" + title);
      } else if (id == null || title == null || description == null || creator == null){
        console.log("messing");
        reject("Failure :(");

      }
  });

    addPromisr.then(successResult => {
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
      console.log(successResult);
      this.success = true
    }).catch((failResult) => {
      console.log(failResult);
      this.success = false;
    });

    this.inputId.nativeElement.value = '';
    this.inputTitle.nativeElement.value = '';
    this.inputDescription.nativeElement.value = '';
    this.inputCreator.nativeElement.value = '';
    this.inputImgURL.nativeElement.value = '';
    this.inputType.nativeElement.value = '';
    this.inputTags.nativeElement.value = '';
  }

}
