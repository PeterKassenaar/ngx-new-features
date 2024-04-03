import {Component, computed, effect, inject, Injector, Signal, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  // 1. NEW: Signal variables, with explicit typing (not mandatory, but depending on tsconfig.json).
  count: WritableSignal<number> = signal(0);
  double: Signal<number> = computed(() => this.count() * 2);
  doubleDouble: Signal<number> = computed(() => this.double() * 2);

  // 2. Signal methods
  updateCount(value: number): void {
    this.count.set(this.count() + value);
  }

  resetCount(): void {
    this.count.set(0)
  }

  // 3. OLD: using RxJS BehaviorSubject:
  count$: BehaviorSubject<number> = new BehaviorSubject(0);
  double$: Observable<number> = this.count$.pipe(
    map((count: number) => count * 2)
  );

  // 4. RxJS methods on the stream
  updateCountStream(value: number):void {
    let count:number = this.count$.value;
    this.count$.next(count + value);
  }

  // 5. Updating a signal
  // 5a. Directly
  setSignal(value: number):void {
    this.count.set(value);
  }

  // 5b. Via .update() function, using the previous value
  updateSignal(value: number):void {
    this.count.update(currentValue => currentValue + value);
  }


  // 6. Using effect() in the constructor WILL work, b/c of the injection context
  constructor() {
    effect(() => {
      console.log('[Constructor] The count is ' + this.count);
    });
  }

  // 7. Effects - need an *injection context*. So the example
  // below will ONLY WORK if {injector: this.injector} is passed as parameter
  injector = inject(Injector);
  addEffect(){
    effect(() => {
      console.log('[addEffect] The count is ' + this.count);
      // When called, the DevTools console shows: Error: NG0203: effect() can only
      // be used within an injection context such as a constructor, a factory function,
      // a field initializer (...)
    }, { injector: this.injector});
  }
}
