import {Injectable, NgZone} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sbj: ReplaySubject<number> = new ReplaySubject();

  private getRandomPercent: () => number = () => Math.floor(Math.random() * 100);

  constructor(private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.sbj.next(this.getRandomPercent())
      }, 3000);
    });
  };

  private init() {
    setInterval(() => {
      this.sbj.next(this.getRandomPercent())
    }, 3000)
  }
}
