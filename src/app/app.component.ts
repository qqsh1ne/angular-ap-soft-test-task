import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'angular-ap-soft-test-task';

  checkRender() {
    console.log('app rendered')
  }
}
