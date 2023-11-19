import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name : string = 'spiderman';
  public edad : number = 30;

  get nombreCapitalizado() : string {
    return this.name.toUpperCase();
  }

  descripcionHeroe() : string {
    return `${ this.name } - ${ this.edad }`;
  }

  cambiarNombre() : void {
    this.name = 'ironman';
  }

  cambiarEdad() : void {
    this.edad = 45;
  }

  resetForm() : void {
    this.name = 'spiderman';
    this.edad = 30;
  }
}
