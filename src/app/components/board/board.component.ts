import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  get rowData(): number | undefined {
    return this._rowData;
  }

  set rowData(value: number | undefined) {
    console.log(value);
    this._rowData = value;
  }
  private _rowData?: number;

  constructor(
    private dataService: DataService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    setTimeout(this.initialize.bind(this));
  }

  private initialize() {
    this.dataService.sbj.subscribe((data: any) => {
      this.rowData = data;
      this.ref.markForCheck();
      this.ref.detectChanges();
    });
  }
}
