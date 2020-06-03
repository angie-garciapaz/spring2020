import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms-week2';
  selectedFeature = 'contacts';

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}