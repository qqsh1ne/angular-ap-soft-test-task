import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRowItemComponent } from './board-row-item/board-row-item.component';

@NgModule({
  declarations: [
    BoardRowItemComponent
  ],
  exports: [
    BoardRowItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoardRowModule { }
