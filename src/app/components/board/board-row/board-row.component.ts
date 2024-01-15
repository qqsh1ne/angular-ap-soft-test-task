import {ChangeDetectorRef, Component, QueryList, ViewChildren} from '@angular/core';
import {DATA_COLUMNS_COUNT} from "../../../consts";
import {BoardRowItemComponent} from "./board-row-item/board-row-item.component";

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.scss', '../board.component.scss', '../../../app.component.scss']
})
export class BoardRowComponent {
  @ViewChildren(BoardRowItemComponent) cells: QueryList<BoardRowItemComponent>;

  private _number: number | undefined;

  constructor(
    private ref: ChangeDetectorRef
  ) {
  }

  get number(): number | undefined {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
    this.ref.detectChanges();
  }

  set values(value: number[]) {
    this.cells.forEach((cell, index) => {
      cell.value = value[index];
    })
  }

  protected checkRender() {
    console.log('row rendered')
  }

  protected readonly Array = Array;
  protected readonly DATA_COLUMNS_COUNT = DATA_COLUMNS_COUNT;
}
