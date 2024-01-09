import {ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
  selector: 'app-board-header-item',
  templateUrl: './board-header-item.component.html',
  styleUrls: ['./board-header-item.component.scss', '../../../../app.component.scss', '../../board.component.scss']
})
export class BoardHeaderItemComponent {

  @Input() name: string = '';
  private _value: number = 0;

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  get value(): number {
    return this._value;
  }
  set value(value: number) {
    this._value = value;
    this.ref.detectChanges();
  }

  protected checkRender() {
    console.log('header item rendered')
  }
}
