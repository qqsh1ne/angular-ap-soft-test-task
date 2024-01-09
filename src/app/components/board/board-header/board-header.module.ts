import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardHeaderItemComponent } from './board-header-item/board-header-item.component';

@NgModule({
    declarations: [
        BoardHeaderItemComponent
    ],
    exports: [
        BoardHeaderItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BoardHeaderModule { }
