import {Component, QueryList, ViewChildren} from '@angular/core';
import {BoardHeaderItemComponent} from "./board-header-item/board-header-item.component";

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss', '../../../app.component.scss', '../board.component.scss']
})
export class BoardHeaderComponent {
  // @ts-ignore
  @ViewChildren(BoardHeaderItemComponent) items: QueryList<BoardHeaderItemComponent>;

  private _rowsCount: number = 0;

  set rowsCount(value: number) {
    this._rowsCount = value;
    // @ts-ignore
    this.items.get(0).value = value;
  }

  set totalLoad(value: number) {
    // @ts-ignore
    this.items.get(1).value = value / this._rowsCount;
  }
  set totalMemory(value: number) {
    // @ts-ignore
    this.items.get(2).value = value / this._rowsCount;
  }

  protected checkRender() {
    console.log('header rendered')
  }
}
