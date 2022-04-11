import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../helper-files/content-interface';
import { carModels } from '../helper-files/contentDb';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Car[]> {
    console.log("Getting the content from the server");
    return this.http.get<Car[]>("api/content");
  }

  addContent(newContentItem: Car): Observable<Car> {
    console.log("Adding a new pokemon: ", newContentItem);
    return this.http.post<Car>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Car): Observable<any> {
    return this.http.put("api/content", contentItem, this.httpOptions);
  }

  getContentItem(id: number): Observable<Car> {
    console.log("Retrieving OBSERVABLE content item");
    return this.http.get<Car>("api/content/" + id);
  }
}
