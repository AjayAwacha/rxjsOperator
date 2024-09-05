import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  myCustomObSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    const customObservable = new Observable((observer) => {
      observer.next('First Value');
      setTimeout(() => {
        observer.next('Final Value');       // Emit value from observable
        // observer.error('Custom error');  // Emit error from observable
        observer.complete();                // Emit complete observable
      }, 2000)
    });

    // First callback execute when observable emit data
    // secound callback execute when observable emit error
    // third callback execute when complete observable if error occured then callback never complete
    this.myCustomObSubscription = customObservable.subscribe((data) => {
      console.log('Received Emited Data ', data)
    }, (error) => {
      console.log('Catch Emited Error from Observable ', error)
    }, () => {
      console.log('Complete Observable')
    });

    // unsubscribe to observable
    // essential to prevent from memeory leack
    // customSubscription.unsubscribe();
  }

  ngOnDestroy() {
    this.myCustomObSubscription.unsubscribe();
  }

}
