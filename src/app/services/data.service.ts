import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {getRandomInt, getRandomPercent} from "../utils";
import {DATA_COLUMNS_COUNT} from "../consts";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getters: BehaviorSubject<number[]>[];

  constructor(private zone: NgZone) {
    this.getters = Array
      .from({length: getRandomInt(10, 25)},
        () => new BehaviorSubject(Array
          .from({length: DATA_COLUMNS_COUNT},
            () => getRandomPercent()))
      );
    this.getters.forEach((sbj) => {
      this.zone.runOutsideAngular(() => {
        setInterval(() => {
          if (!this.newDataCame()) {
            return
          }
          sbj.next(Array.from({length: DATA_COLUMNS_COUNT}, () => getRandomPercent()))
        }, 1000);
      });
    });
  };

  getRowsCount() {
    return this.getters.length;
  }

  private newDataCame() {
    return getRandomInt(0, 3) !== 0;
  }
}
