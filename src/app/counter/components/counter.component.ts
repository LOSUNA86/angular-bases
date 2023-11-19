import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="operacion(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="operacion(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter : number = 10;

  public operacion( valor : number ) : void  {
    this.counter += valor;
  };

  public reset() : void {
    this.counter = 10;
  };

}
