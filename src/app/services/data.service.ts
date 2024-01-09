import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {getRandomInt, getRandomPercent} from "../utils";
import {DATA_COLUMNS_COUNT} from "../consts";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getter: BehaviorSubject<number[][]>;

  constructor(private zone: NgZone) {
    const rowsCount = getRandomInt(10, 30);
    this.getter = new BehaviorSubject(Array.from({length: rowsCount},
      () => Array.from({length: DATA_COLUMNS_COUNT},
        () => getRandomPercent()
      ))
    );
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.getter.next(Array.from({length: rowsCount},
          () => Array.from({length: DATA_COLUMNS_COUNT},
            () => getRandomPercent()
          ))
        );
      }, 1000)
    })
  };

  getRowsCount() {
    return this.getter.value.length;
  }
}
