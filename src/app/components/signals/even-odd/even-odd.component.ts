import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-even-odd',
  standalone: true,
  imports: [],
  templateUrl: './even-odd.component.html',
  styleUrl: './even-odd.component.css'
})
export class EvenOddComponent {
  // Writable signal
  count = signal(0);

  // Derived signal
  parity = computed(() =>
    this.count() % 2 === 0 ? 'even' : 'odd'
  );

  // We can also create the complete label using computed():
  parityLabel = computed(() =>
    `${this.count()} = ${this.count() % 2 === 0 ? 'even' : 'odd'}`
  );
  // In that case, use <p>parityLabel()</p> in the template.

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }

  reset() {
    this.count.set(0);
  }

  // Workshop: use an effect() to log the current parity to the console.
  //....
}
