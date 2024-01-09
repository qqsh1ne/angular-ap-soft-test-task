import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-board-row-item',
  templateUrl: './board-row-item.component.html',
  styleUrls: ['./board-row-item.component.scss']
})
export class BoardRowItemComponent {
  private _value: number = 0;

  constructor(
    private ref: ChangeDetectorRef
  ) {
  }

  get value(): number {
    return this._value;
  }
  set value(value: number) {
    if (this._value === value) {
      return
    }
    this._value = value;
    this.ref.detectChanges();
  }

  protected checkRender() {
    console.log('cell rendered')
  }
}
