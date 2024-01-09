import { AfterViewInit, Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import {DataService} from "../../services/data.service";
import {BoardRowComponent} from "./board-row/board-row.component";
import {BoardHeaderComponent} from "./board-header/board-header.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss', '../../app.component.scss']
})
export class BoardComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  @ViewChildren(BoardRowComponent) rows: QueryList<BoardRowComponent>;
  // @ts-ignore
  @ViewChild(BoardHeaderComponent) header: BoardHeaderComponent;

  protected rowsCount: number;
  protected readonly Array = Array;

  constructor(
    private dataService: DataService,
  ) {
    this.rowsCount = 0;
  };

  ngOnInit() {
    setTimeout(this.initialize.bind(this));
    this.rowsCount = this.dataService.getRowsCount();
  }

  ngAfterViewInit() {
    this.rows.forEach((row, index) => {
      row.number = index + 1;
    });
    this.header.rowsCount = this.rowsCount;
  }

  protected checkRender() {
    console.log('board rendered')
  }

  private initialize() {
    this.dataService.getter.subscribe((data) => {
      let totalLoad = 0;
      let totalMemory = 0;
      data.forEach((row, index) => {
        // @ts-ignore
        this.rows.get(index).values = row.slice();
        totalLoad += row[0];
        totalMemory += row[1];
      });
      this.header.totalLoad = totalLoad;
      this.header.totalMemory = totalMemory;
    });

  }
}

