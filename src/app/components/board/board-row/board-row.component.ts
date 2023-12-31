import {ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.scss', '../board.component.scss', '../../../app.component.scss']
})
export class BoardRowComponent {
  get number(): number | undefined {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
    this.ref.detectChanges();
  }
  get values(): number[] {
    return this._values;
  }
  set values(value: number[]) {
    this._values = value;
    this.ref.detectChanges();
  }

  private _number: number | undefined;
  private _values: number[] = [];

  constructor(
    private ref: ChangeDetectorRef
  ) {
  }

  protected checkRender() {
    console.log('row rendered')
  }
}
