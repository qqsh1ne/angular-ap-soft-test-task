import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./board.component";
import {DataService} from "../../services/data.service";
import { BoardRowComponent } from './board-row/board-row.component';
import { BoardHeaderComponent } from './board-header/board-header.component';

@NgModule({
  declarations: [BoardComponent, BoardRowComponent, BoardHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [BoardComponent],
  providers: [DataService]
})
export class BoardModule { }
