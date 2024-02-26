import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
    styles: [],
    imports: [
      RouterOutlet, 
      HeaderComponent,
    ]
})
export class AppComponent {
  title = 'store';
}
