import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public nombres : string[] = ['luis','fernando','ana','lourdes'];
  public nombreBorrado? : string;
  borrar() : void {
    this.nombreBorrado = this.nombres.pop();
  }

}
