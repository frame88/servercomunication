import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid mt-5">
    <div class="container text-center">

      <app-catalog></app-catalog>
      
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'servercomunication';
}
