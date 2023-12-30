import {
  afterRender,
  AfterRenderPhase,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
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
  ) {
    afterRender(() => {
      console.log('board rendered')
    })
  }

  ngOnInit() {
    setTimeout(this.initialize.bind(this));
  }

  checkRender() {
    console.log('board rendered')
  }

  private initialize() {
    this.dataService.sbj.subscribe((data: any) => {
      this.rowData = data;
      // this.ref.detectChanges();
    });
  }
}
