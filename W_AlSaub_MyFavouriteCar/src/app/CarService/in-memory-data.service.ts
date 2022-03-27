import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Car } from '../helper-files/content-interface';
import { carModels } from '../helper-files/contentDb';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  constructor() { }
  createDb() {
    const content: Car[] = carModels;
    return { content };
  }

  getId(content: Car[]): number {
    return content.length > 0 ? Math.max(...content.map(c => { return c.id ?? 0 })) + 1 : 2000;
  }
}
