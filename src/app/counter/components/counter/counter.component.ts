import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>counter {{ counter }}</h3>

    <button (click)="incrementBy(-1)">-1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="incrementBy(+1)">+1</button>`,
})
export class CounterComponent {
  public counter: number = 10;

  incrementBy(value: number): void {
    this.counter += value;
  }
  resetCounter() {
    this.counter = 10;
  }
}
