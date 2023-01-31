import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  squares: any[] = []; // Representa los 9 movimientos en el tablero
  xIsNext: boolean = false; // Determina el jugar en turno
  winner!: string; //Indica si gano X o O;

}
