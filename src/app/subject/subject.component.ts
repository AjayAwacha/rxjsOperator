import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  sub1 = new Subject<number>();
  sub2 = new BehaviorSubject<number>(1);
  sub3 = new ReplaySubject<number>(2);
  sub4 = new AsyncSubject<number>();

  constructor() { }
  ngOnInit(): void {
    // Subject don't have any initial value
    // subscriber can not execute immediatlly after subscribing it
    // this.sub1.next(1);
    // this.sub1.subscribe((data) => console.log('Subscriber 1 ',data));
    // this.sub1.next(2);
    // this.sub1.subscribe((data) => console.log('Subscriber 2',data));
    // this.sub1.next(3);

    // Behaviour subject have initial value
    // when any subscriber subscribe to it it execute immediatlly got last emited value
    // if no value emited then got initial value
    // this.sub2.subscribe((data) => console.log('Behaviour subject 1 ', data));
    // this.sub2.next(2);
    // this.sub2.subscribe((data) => console.log('Behaviour subject 2 ', data));
    // this.sub2.next(3);

    // ReplaySubject
    // ReplaySubject keep last n number of emited values
    // if there is no value emited than subscriber do not execute
    // if there is values then that no of times subscriber execute
    // this.sub3.subscribe((data) => console.log('Replay Subject 1', data));
    // this.sub3.next(1);
    // this.sub3.subscribe((data) => console.log('Replay Subject 2', data));
    // this.sub3.next(2);
    // this.sub3.subscribe((data) => console.log('Replay Subject 3', data));
    // this.sub3.next(3);
    // this.sub3.subscribe((data) => console.log('Replay Subject 4', data));

    // AsyncSubject
    // AsyncSubject is a special type of Subject that emit latest value of the source Observable 
    // when source Observable is complete
    this.sub4.subscribe((data) => console.log('Subscriber 1', data));
    this.sub4.next(1);
    this.sub4.next(2);
    this.sub4.subscribe((data) => console.log('Subscriber 2', data));
    this.sub4.complete();
    this.sub4.subscribe((data) => console.log('Subscriber 3', data));

  }

}
