import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <div class="container-fluid">
    <app-zip-code></app-zip-code>
  </div>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
