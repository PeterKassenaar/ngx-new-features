import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-signal-child',
  standalone: true,
  imports: [],
  templateUrl: './signal-child.component.html',
  styleUrl: './signal-child.component.css'
})
export class SignalChildComponent {
  /**
   * `input()` creates an InputSignal.
   * It is the successor to @Input() TypeScript decorators.
   * - Parent binds `[value]="..."`.
   * - Child reads it as `value()`.
   * - You can give it a default.
   */
  value = input<number>(0);

  /**
   * `computed()` derives state from signals.
   * It automatically re-runs when `value()` changes.
   */
  parity = computed(() => (this.value() % 2 === 0 ? 'even' : 'odd'));
}
