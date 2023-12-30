import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./board.component";
import {DataService} from "../../services/data.service";

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule
  ],
  exports: [BoardComponent],
  providers: [DataService]
})
export class BoardModule { }
