import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html',
  styleUrls: ['./hot-observable.component.css']
})
export class HotObservableComponent implements OnInit {

  // hot observable emit data from outside the observable
  // each subscriber get same emited value
  // best example of Hot observable is subject

  sub = new Subject<number>();
  constructor() { }

  ngOnInit(): void {
    this.sub.subscribe((data) => console.log('Subscriber 1', data));
    this.sub.subscribe((data) => console.log('Subscriber 2', data))
    this.sub.next(1);
    this.sub.next(2);
  }

}
