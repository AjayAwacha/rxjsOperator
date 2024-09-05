import { Component, OnInit } from '@angular/core';
import { forkJoin, from, fromEvent, interval, merge, of, timer } from 'rxjs';
import { concatMap, delay, exhaustMap, map, mergeAll, mergeMap, switchMap, take } from 'rxjs/operators';

import { MyAPIService } from '../services/my-api.service';


@Component({
  selector: 'app-merging-operator',
  templateUrl: './merging-operator.component.html',
  styleUrls: ['./merging-operator.component.css']
})
export class MergingOperatorComponent implements OnInit {

  constructor(
    private myAPI: MyAPIService
  ) { }

  ngOnInit(): void {
    // 1> merge operator
    // The merge operator combines multiple observables,
    // sending any emitted values from them to a single subscriber.
    // const firstSource = interval(1000).pipe(
    //   take(5),
    //   map(val => `First source: ${val}`)
    // );
    // const secondSource = interval(500).pipe(
    //   take(2),
    //   map(val => `Second source: ${val}`)
    // );
    // merge(firstSource, secondSource).subscribe((data) => {
    //   console.log(data);
    // })
  
    // merge(this.myAPI.fetchData(), this.myAPI.fetchData())
    // .subscribe((res) => {
    //   console.log('responce we got ', res);
    // });
    // problem with above example is inside subscriber we don't know which API responce

    // const source1 = this.myAPI.fetchData('akita').pipe(
    //   map((res) => {
    //     return {source: 'API1', data: res}
    //   })
    // )
    // const source2 = this.myAPI.fetchData('boxer').pipe(
    //   map((res) => {
    //     return {source: 'API2', data: res}
    //   })
    // )
    // merge(source1, source2)
    // .subscribe((data) => {
    //   console.log(data);
    // })

    // we can also use forkJoin
    // forkJoin([this.myAPI.fetchData('akita'), this.myAPI.fetchData('boxer')])
    // .subscribe((data) => {
    //   console.log(data);
    // })
    // difference between them is forkjoin wait to complete all obseravle merge not wait
    // emit value if any inner observable emit

    // 2> mergeAll operator
    // If the source observable emits values as inner observables, the mergeAll operator
    // subscribes to each emitted observable without unsubscribing from the previous ones.
    // By default, mergeAll() executes all inner observables simultaneously,
    // but you can set limit
    // const api1$ = interval(1000).pipe(take(1)).pipe(map(() => 'API 1 Data'));
    // const api2$ = interval(2000).pipe(take(1)).pipe(map(() => 'API 2 Data'));
    // const api3$ = interval(500).pipe(take(1)).pipe(map(() => 'API 3 Data'));
    // const source$ = from([api1$, api2$, api3$]);
    // source$.pipe(
    //   mergeAll()
    // ).subscribe((data) => {
    //   console.log(data);
    // });

    // const source = from([this.myAPI.fetchData('akita'), this.myAPI.fetchData('boxer')])
    // .pipe(
    //   mergeAll()
    // )
    // source.subscribe((data) => {
    //   console.log(data);
    // });

    // 3> mergeMap operator
    // The mergeMap operator accepts a callback function as an input parameter. This callback is applied
    // to each value emitted by the source observable, converting each emitted value into an inner observable.
    // The mergeMap operator then subscribes to each emitted inner observable without unsubscribing from the
    // previous ones, allowing all inner observables to run concurrently.
    // ex. in our application suppose source observable emit userId we also want to fetch data of each user Id
    // function getUserDetails(userId: any) {
    //   return interval(userId * 1000).pipe(take(1), map(() => `Request User ${userId}: Data`));
    // }
    // const sourceObservable = of(4, 1, 2).pipe(
    //   mergeMap(val => getUserDetails(val))
    // );
    // sourceObservable.subscribe((data) => {
    //   console.log(data)
    // });

    // const source = from(['akita', 'boxer', 'african']);
    // source.pipe(
    //   mergeMap((bread) => this.myAPI.fetchData(bread))
    // )
    // .subscribe((data) => {
    //   console.log(data);
    // })

    // 4>switch map
    // The switchMap operator accepts a callback function as an input parameter. This callback is applied
    // to each value emitted by the source observable, converting each emitted value into an inner observable.
    // The switchMap operator subscribes to each newly emitted inner observable and unsubscribes from any
    // previously subscribed inner observable whenever a new one is emitted.
    // const ele = document.getElementById('ele') as HTMLElement;
    // const source = fromEvent(ele, 'click');
    // const result = source.pipe(
    //   switchMap(() => {
    //     return interval(1000).pipe(take(5));
    //   })
    // );
    // result.subscribe(value => console.log(value));
  
   // 5>concate Map
   // The concatMap operator accepts a callback function as an input parameter. This callback is applied
   // to each value emitted by the source observable, converting each emitted value into an inner observable.
   // The concatMap operator subscribes to each inner observable but wait for the current
   // inner observable to complete before subscribing to new emited observable.
    // const ele = document.getElementById('ele') as HTMLElement;
    // const source = fromEvent(ele, 'click');
    // const result = source.pipe(
    //   concatMap(() => {
    //     return interval(1000).pipe(take(5));
    //   })
    // );
    // result.subscribe(value => console.log(value));

    // 6> exhaustMap operator
    // The exhaustMap operator accepts a callback function as an input parameter. This callback function is applied
    // to each value emitted by the source observable, converting each emitted value into an inner observable.
    // The exhaustMap operator subscribes to the first inner observable and ignores subsequent inner observables
    // until the current inner observable completes its execution.
    // const ele = document.getElementById('ele') as HTMLElement;
    // const source = fromEvent(ele, 'click');
    // const result = source.pipe(
    //   exhaustMap(() => {
    //     return interval(1000).pipe(take(5));
    //   })
    // );
    // result.subscribe(value => console.log(value));

    // forkJoin take array of observables execute all observable simultinously
    // wait for all of them to complete to emit final value
    // const observableOne = of('First').pipe(delay(1000));
    // const observableTwo = of('Two').pipe(delay(2000)); 
    // const observableThird = of('Third').pipe(delay(3000)); 
    // forkJoin([observableOne, observableTwo, observableThird])
    // merge(observableOne, observableTwo, observableThird)
    // .subscribe((data) => console.log(data));

  }

}
