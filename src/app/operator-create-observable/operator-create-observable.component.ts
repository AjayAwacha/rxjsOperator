import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription, from, fromEvent, interval, of, timer } from 'rxjs';

import { MyAPIService } from '../services/my-api.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-operator-create-observable',
  templateUrl: './operator-create-observable.component.html',
  styleUrls: ['./operator-create-observable.component.css']
})
export class OperatorCreateObservableComponent implements OnInit {

  subscription!: Subscription;

  // rxjs provide many operator which create observable
  // fromEvent
  constructor(
    private myAPI: MyAPIService
  ) { }

  ngOnInit(): void {
    // fromEvent operator create observable which emit data when ever event trigger on DOM element
    // const ele = document.getElementById('ele') as HTMLElement;
    // const observable1 = fromEvent(ele, 'click');
    // observable1.subscribe((data: any) => {
    //   console.log('Event Trigger ', data.target);
    // });

    // of operator
    // take any no of arguments create observable which emit that value and complete the observable
    // const observable2 = of(1, 2, 3);
    // observable2.subscribe((data) => {
    //   console.log(data);
    // }, (error) => {
    //   console.log('error')
    // }, () => {
    //   console.log('complete the Observable')
    // });

    // from operator
    // create observable from any iterable and that Observable emit that value and complete the Observable
    // const observable3 = from([1, 2, 3]);
    // observable3.subscribe((data) => {
    //   console.log(data);
    // }, (error) => {
    //   console.log('error')
    // }, () => {
    //   console.log('complete the Observable')
    // });

    // interval
    // create observable which emit number after every specific time interval
    // subscribhis generally used for creating poolie api
    // const observable4 = interval(2000);
    // observable4.subscribe((data) => {
    //   console.log(data);
    // });

    // timer
    // first value emit in 2 sec and emit every time after 5 sec
    // const observable5 = timer(0, 2000);
    // observable5.subscribe((data) => {
    //   console.log(data);
    // })

    // realtime Example with interval and timer
    this.subscription = interval(2000).pipe(
      concatMap(() => this.myAPI.fetchData())
    )
    .subscribe((res) => {
      console.log('responce got in 2 sec ', res);
    });
  }

  unsubscribeData() {
    this.subscription.unsubscribe();
  }
}
