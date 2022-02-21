import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  carModels: Car[];
  constructor() {

    this.carModels = [
      {
        id: 0,
        title: "Camaro",
        description: "mid-size American sport car manufactured by Chevrolet",
        creator: "Chevrolet",
        imgURL: "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2019/04/24/-1/chevrolet-camaro-fronter.jpg",
        type: "Pony Car",
        tags: ["My most favourite car", "elegant design"]
      },
      {
        id: 1,
        title: "Malibu",
        description: "mid-size American family sedan manufactured by Chevrolet",
        creator: "Chevrolet",
        imgURL: "https://www.youniversitytv.com/wp-content/uploads/2017/05/2018-chevrolet-malibu.jpg",
        type: "Sedan"
      },
      {
        id: 2,
        title: "Bronco",
        description: "American Sport SUV manufactured by Ford",
        creator: "Ford",
        type: "Compact SUV"
      },
      {
        id: 3,
        title: "G-Class",
        description: "four-wheel drive automobile manufactured by Mercedes-Benz",
        creator: "Mercedes-Benz",
        imgURL: "https://www.marinoperformancemotors.com/imagetag/13140/11/l/Used-2019-Mercedes-Benz-G-Class-AMG-G-63.jpg",
        type: "Military off-roader"
      },
      {
        id: 4,
        title: "BRZ",
        description: "sport car designed by Toyota and Subaru and manufactured at Subaru's Gunma plant",
        creator: "Subaru",
        imgURL: "https://www.carscoops.com/wp-content/uploads/2020/01/Subaru-BRZ-2.jpg",
        type: "Sport car"
      },
      {
        id: 5,
        title: "993",
        description: "993 is the internal designation for the Porsche 911 model manufactured by Porsche",
        creator: "Porsche",
        imgURL: "https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/6083-porsche-993-black/.thumbnails/P1830054.jpg/P1830054-2040x1255.jpg"
      }];

  }

  search(sTerm: string): string {
    let exist: boolean = false;
    this.carModels.forEach(function (car) {
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
