import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./board.component";
import {DataService} from "../../services/data.service";
import { BoardCellComponent } from './board-cell/board-cell.component';

@NgModule({
  declarations: [BoardComponent, BoardCellComponent],
  imports: [
    CommonModule
  ],
  exports: [BoardComponent],
  providers: [DataService]
})
export class BoardModule { }
