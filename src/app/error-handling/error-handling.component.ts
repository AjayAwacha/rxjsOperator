import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of, throwError } from 'rxjs';
import { buffer, bufferCount, bufferTime, catchError, debounceTime, retry, switchMap, take, tap, throttleTime } from 'rxjs/operators';

import { MyAPIService } from '../services/my-api.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor(
    private myAPI: MyAPIService
  ) { }

  ngOnInit(): void {
    // 1> catchError operator are used to handle error in source observable
    // 2> throwError operator in rxjs are used to throw error manually
    // const source = throwError('custom Error1');
    // source.
    // pipe(
    //   tap((data) => {console.log('Tap data ', data)}),
    //   take(5),
    //   catchError((err) => {
    //     console.log('error catch by Catch Error Operator ', err);
    //     // return 'custom Error';
    //     return throwError('custom Error2');
    //   })
    // ).
    // subscribe((data) => {
    //   console.log('Observable Emit Value', data)
    // }, (err) => {
    //   console.log('Error catch in Observable callback', err)
    // })

    // if source observable emit error then it can be catch by secound argument of subscribe method
    // but if we use catchError operator then it first catch bt this operator and if this operator 
    // throwError then only it can catch by secound arg pof callback function

    // 3> retry 
    // retry operator in rxjs are used to re-subscribe to observable specific number of times
    // if any error occured
    // const source = throwError('custom Error');
    // const source = of('custom Error');
    // source.
    // pipe(
    //   retry(3)
    // ).
    // subscribe((data) => {
    //   console.log('Observable Emit Value', data)
    // }, (err) => {
    //   console.log('Error Occured in Observable ', err)
    // })

    // buffer operator
    // buffer operator keep values emited from source observable emit this value as an array based on single 
    // of another observable
    // const sourceObservable = interval(1000);
    // const anotherObservable = interval(5000);
    // sourceObservable.pipe(
    //   buffer(anotherObservable)
    // ).subscribe((data) => {
    //   console.log(data);
    // })

    // bufferTime operator
    // bufferTime operator collect value emited from source observable and emited them as an array after 
    // specific period of time
    // const sourceObservable = interval(500);
    // sourceObservable.pipe(
    //   bufferTime(2000)
    // ).subscribe((data) => {
    //   console.log(data);
    // })

    // bufferCount
    // bufferCount operator are used to keep values emited from source observable
    // emit them all as an array 
    // const sourceObservable = interval(500);
    // sourceObservable.pipe(
    //   bufferCount(5)
    // ).subscribe((data) => {
    //   console.log(data);
    // })

    // always remember that buffer, bufferTime, bufferCount operator keep value emited from source
    // observable in memeory means if source observable emit data very fast it will affect to performance
    // of application

    // debounceTime
    // debounceTime operator in rxjs start timer of given time interval when source observable start
    // emiting first data when source observable emit data again it reset that timer
    // subscriber got latest value only when that timer is finish
    const input = document.getElementById('input') as HTMLInputElement;
    const sourceObservable = fromEvent(input, 'change');
    sourceObservable.pipe(
      debounceTime(2000),
      switchMap(() => this.myAPI.fetchData())
    ).subscribe((res) => {
      console.log(res);
    });

    // throttlleTime
    // throttlleTime operator send first emited data from source observable to subscriber and start time
    // within that timer all emited value just ignore once timer finish aain value send and start timer
    // const btn = document.getElementById('btn') as HTMLElement;
    // const sourceObservable = fromEvent(btn, 'click');
    // sourceObservable.pipe(
    //   throttleTime(2000)
    // ).subscribe((data) => {
    //   console.log(data?.target);
    // })


  }

}
