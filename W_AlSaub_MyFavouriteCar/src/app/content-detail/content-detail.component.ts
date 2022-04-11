import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../CarService/Car.service';
import { Car } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;
  individualCar?: Car;
  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        console.error("this is really bad, how did the id not get set?");
      }
      this.id = +(params.get('id') ?? "0");
      this.carService.getContentItem(this.id).subscribe((singleCar) => {
        this.individualCar = singleCar;
      });
    });
  }

}
