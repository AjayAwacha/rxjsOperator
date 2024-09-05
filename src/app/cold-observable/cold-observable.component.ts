import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { randomResponse, testInter } from '../interfaces/apiResponceModel';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.css']
})
export class ColdObservableComponent implements OnInit {

  // cold Observable produce data inside the observable
  // each subscriber got independant execution of value
  // best example of cold observable is custom observable, observable created from httpClent service

  // observer.complete() inform subscriber that no further value is going to emit so you can
  // release resources

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {}

  // cold observable using custom observable
  getRandomNumberObservable(): Observable<number> {
    return new Observable((observer) => {
      observer.next(Math.random());
      observer.complete();
    });
  }

  // cold observable using API call
  // getDogImg(): Observable<randomResponse> {
  //   return this.http.get<randomResponse>('https://dog.ceo/api/breeds/image/random');
  // }

  subscribeToColdObservable() {
    this.getRandomNumberObservable().subscribe((res) => console.log('Subscriber 1 ', res));
    this.getRandomNumberObservable().subscribe((res) => console.log('Subscriber 2 ',res));

    // this.getDogImg().subscribe((res: randomResponse) => {
    //   console.log('Subscriber 1 ', res);
    // });

    // this.getDogImg().subscribe((res: randomResponse) => {
    //   console.log('Subscribe 2', res);
    // });
  }

}
