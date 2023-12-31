import {afterRender, AfterRenderPhase, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  checkRender() {
    console.log('app rendered');
  }
}
