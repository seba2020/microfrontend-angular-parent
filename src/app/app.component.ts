import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parent';
  data = 'cualquier cosa desde el padre.';

  getDataBack($event: string) {
    console.log($event);
  }
}
