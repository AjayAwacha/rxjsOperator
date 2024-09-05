import { Component, OnInit } from '@angular/core';
import { EventemiterBusService } from '../services/eventemiter-bus.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  constructor(
    private eeBus: EventemiterBusService
  ) { }

  ngOnInit(): void {
  }

  // subscribeToEventEmiter() {
  //   this.eeBus.getEventEmitter().subscribe((data: string) => {
  //     console.log('Data Received in Subscriber 1 ', data);
  //   })
  //   this.eeBus.getEventEmitter().subscribe((data: string) => {
  //     console.log('Data Received in Subscriber 2 ', data);
  //   })
  // }

  subscribeToSubject() {
    this.eeBus.getMySubject().subscribe((data: string) => {
      console.log('Data Received in Subscriber 1 ', data);
    })

    this.eeBus.getMySubject().subscribe((data: string) => {
      console.log('Data Received in Subscriber 2 ', data);
    })
  }

}
