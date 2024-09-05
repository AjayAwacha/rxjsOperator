import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventemiterBusService {

  // sharing data between component using EventEmitter class
  // private myEventEmitter: EventEmitter<string> = new EventEmitter();
  // emitData(msg: string) {
  //   this.myEventEmitter.emit(msg);
  // }
  // getEventEmitter(): EventEmitter<string> {
  //   return this.myEventEmitter;
  // }

  // sharing data between component using subject
  private mySubject: Subject<string> = new Subject();

  emitSubjectData(msg: string) {
    this.mySubject.next(msg);
  }

  getMySubject(): Subject<string> {
    return this.mySubject;
  }
}
