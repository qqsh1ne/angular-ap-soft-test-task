import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss', '../../../app.component.scss', '../board.component.scss']
})
export class BoardHeaderComponent {
  get isChanged(): boolean {
    return this._isChanged;
  }

  set isChanged(value: boolean) {
    this._isChanged = value;
    this.ref.detectChanges();
    this._totalMemory = 0;
    this._totalLoad = 0;
    this._isChanged = false;
  }

  private _totalLoad: number = 0;
  private _totalMemory: number = 0;
  private _rowsCount: number = 0;
  private _isChanged: boolean = false;

  constructor(
    private ref: ChangeDetectorRef
  ) {
  }
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

  get totalLoad(): number {
    return this._totalLoad;
  }

  set totalLoad(value: number) {
    this._totalLoad = value;
    // this.ref.detectChanges();
  }

  get totalMemory(): number {
    return this._totalMemory;
  }
  set totalMemory(value: number) {
    this._totalMemory = value;
    // this.ref.detectChanges();
  }

  protected checkRender() {
    console.log('header rendered')
  }
}
