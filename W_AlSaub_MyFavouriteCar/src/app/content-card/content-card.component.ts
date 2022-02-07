import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Car } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() carModels?: Car;
  constructor() { }

  ngOnInit(): void {
  }

}
