import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingProject1';
  enableRecepies: boolean;

  constructor() {
    this.enableRecepies = true;
  }

  receiveMessage(tabName) {
    if (tabName === 'Shopping list') {
      this.enableRecepies = false;
    } else {
      this.enableRecepies = true;
    }
  }
}
