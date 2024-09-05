import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { distinct, filter, map, pluck, take, tap, toArray } from 'rxjs/operators'

@Component({
  selector: 'app-general-rxjs-operator',
  templateUrl: './general-rxjs-operator.component.html',
  styleUrls: ['./general-rxjs-operator.component.css']
})
export class GeneralRxjsOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // 1> Tap operator this is used for debugging and logging
    // we can not change emited value with tap operator
    // const obs1 = of(1, 2, 3);
    // obs1
    // .pipe(
    //   tap((data) => console.log('Log before send to subscriber ', data * 2))
    // )
    // .subscribe((data) => console.log('data received in subscriber ', data));

    // 2> take 
    // take operator allow to take specific number of values emited from observable and then complete the observable
    // const observable2 = of(1, 2, 3, 4, 5, 6);
    // observable2.
    // pipe(
    //   take(3)
    // )
    // .subscribe((data) => console.log(data), (err) => {}, () => {console.log('Observable is Complete')});

    // 3> toArray
    // hold the emited values in buffer and once observable is complte conver them into array and emit once
    // this may lead to memory leak if we emit larg no of values before complte observable
    // const observable3 = of(1, 2, 3);
    // observable3.
    // pipe(
    //   toArray()
    // )
    // .subscribe((data) => console.log(data));

    // 4> map operator
    // map operator are used to perform operation on each emited value and return updated value
    // you must need to return value in map otherwise return emit undefined value
    // const observable4 = of(1, 2, 3, 4, 5, 6);
    // observable4.
    // pipe(
    //   map((data) => {
    //     return data * 2
    //   })
    // )
    // .subscribe((data) => console.log(data));

    // 5> filter operator
    // filter operator are used to filter value emited from observable, it check condition if 
    // condition pass it send data to subscriber if not then ignore that data
    // const observable5 = of(1, 2, 3, 4, 5, 6);
    // observable5.
    // pipe(
    //   // map((data) => data * 2),
    //   // tap((data) => {console.log('Transformed Value', data)}),
    //   filter((data) => data >= 4)
    // )
    // .subscribe((data) => console.log(data));
    
    // 6> distinct
    // distinct operator pass only unique value to subscriber
    // it remove duplicate values
    // const observable6 = of(1, 1, 3, 3, 5, 5);
    // observable6.
    // pipe(
    //   distinct()
    // )
    // .subscribe((data) => console.log(data));

    // 7> pluck operator
    // pluck operator are used to extract specific property from emited object
    const observable7 = from([{name: 'Ajay'}, {name: 'Sopan'}, {name: 'Suraj'}]);
    observable7.
    pipe(
      pluck('name')
    )
    // above is same as
    // pipe(
    //   map((data) => data.name)
    // )
    .subscribe((data) => console.log(data));
  }

}
