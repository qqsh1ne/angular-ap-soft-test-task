import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss', '../../../app.component.scss', '../board.component.scss']
})
export class BoardHeaderComponent {

  private _totalLoad: number = 0;
  private _totalMemory: number = 0;
  private _rowsCount: number = 0;

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  get rowsCount(): number {
    return this._rowsCount;
  }

  set rowsCount(value: number) {
    this._rowsCount = value;
    this.ref.detectChanges();
  }
  get avgLoad(): number {
    return this._totalLoad / this.rowsCount;
  }

  get avgMemory(): number {
    return this._totalMemory / this.rowsCount;
  }

  set totalLoad(value: number) {
    this._totalLoad = value;
    this.ref.detectChanges();
  }
  set totalMemory(value: number) {
    this._totalMemory = value;
    this.ref.detectChanges();
  }

  protected checkRender() {
    console.log('header rendered')
  }
}
