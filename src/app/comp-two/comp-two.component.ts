import { Component, OnInit } from '@angular/core';
import { EventemiterBusService } from '../services/eventemiter-bus.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  constructor(
    private eeBusService: EventemiterBusService
  ) { }

  ngOnInit(): void {
  }

  // emitEventEmitterData() {
  //   this.eeBusService.emitData('data send from Component Two');
  // }

  sendDataToSubject() {
    this.eeBusService.emitSubjectData('data send to Subject');
  }
}

