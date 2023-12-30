import {afterRender, Component, Input} from '@angular/core';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.scss']
})
export class BoardCellComponent {
  @Input() value?: number | undefined;

  constructor() {
    afterRender(() => {
      console.log('cell rendered')
    })
  }

  checkRender() {
    console.log('cell rendered')
  }

  checkHuinya() {
    console.log('zalupa')
  }
}
