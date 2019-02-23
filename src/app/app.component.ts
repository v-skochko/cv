import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider} from './route-animations';

@Component({
  selector: 'app-root',

  animations: [ // <-- add your animations here
    // fader,
    slider
    // transformer,
    // stepper
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})






export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
