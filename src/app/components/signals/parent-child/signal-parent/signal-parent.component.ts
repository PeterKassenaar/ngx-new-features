import { Component, signal, computed } from '@angular/core';
import {SignalChildComponent} from "../signal-child/signal-child.component";

@Component({
  selector: 'app-signal-parent',
  standalone: true,
  imports: [
    SignalChildComponent
  ],
  templateUrl: './signal-parent.component.html',
  styleUrl: './signal-parent.component.css'
})
export class SignalParentComponent {
  /**
   * Writable signal: parent owns the state.
   * Read with `count()`, write with `set()` / `update()`.
   */
  count = signal(0);

  /**
   * Derived state in parent (workshop extension).
   * Used to disable the decrement button.
   */
  isZero = computed(() => this.count() === 0);

  increment() {
    // Update based on previous value.
    this.count.update(v => v + 1);
  }

  decrement() {
    // Update based on previous value.
    this.count.update(v => v - 1);
  }

  reset() {
    // Set to an explicit value.
    this.count.set(0);
  }
}
