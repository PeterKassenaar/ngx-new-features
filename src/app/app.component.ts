import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {DeferComponent} from "./components/defer/defer.component";
import {InjectComponent} from "./components/inject/inject.component";
import {SignalsComponent} from "./components/signals/signals.component";

interface City {
  id: number,
  name: string,
  country: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DeferComponent, InjectComponent, SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17';
  showTitle = false;
  cities : City[] = [
    {id: 1, name: 'Amsterdam', country: 'NL'},
    {id: 2, name: 'Berlin', country: 'GER'},
    {id: 3, name: 'Tokyo', country: 'JAP'},
  ]
}
